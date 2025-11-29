const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { auth, requireRole } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Create donation (donor only)
router.post('/', auth, requireRole('donor'), async (req, res) => {
  try {
    const { foodType, approxQuantity, quantityUnit, area, pickupAddress, preferredPickupTime, contactNumber, photos, suggestedVolunteerId } = req.body;
    
    const donation = await prisma.donation.create({
      data: {
        donorId: req.user.id,
        foodType,
        approxQuantity,
        quantityUnit: quantityUnit || 'portions',
        area,
        pickupAddress,
        preferredPickupTime: preferredPickupTime ? new Date(preferredPickupTime) : null,
        contactNumber,
        suggestedVolunteerId,
        photos: photos ? {
          create: photos.map(url => ({ url }))
        } : undefined
      },
      include: { photos: true }
    });

    res.json(donation);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get donations (with filters)
router.get('/', auth, async (req, res) => {
  try {
    const { area, status = 'available', sort = 'createdAt', page = 1, limit = 10 } = req.query;
    
    const where = { status };
    if (area) where.area = { contains: area, mode: 'insensitive' };

    const orderBy = sort === 'pickup_time' ? { preferredPickupTime: 'asc' } : 
                   sort === 'area' ? { area: 'asc' } : { createdAt: 'desc' };
               
    const donations = await prisma.donation.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: parseInt(limit),
      include: { photos: true, donor: { select: { name: true, phone: true } } }
    });

    res.json(donations); 
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Accept donation (volunteer only)
router.post('/:id/accept', auth, requireRole('volunteer'), async (req, res) => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const updated = await tx.donation.updateMany({
        where: { id: req.params.id, status: 'available' },
        data: { status: 'accepted', acceptedAt: new Date() }
      });

      if (updated.count === 0) {
        throw new Error('Donation not available');
      }

      const acceptance = await tx.acceptance.create({
        data: {
          donationId: req.params.id,
          volunteerId: req.user.id
        }
      });

      return acceptance;
    });

    res.json({ message: 'Donation accepted', acceptance: result });
  } catch (error) {
    if (error.message === 'Donation not available') {
      return res.status(409).json({ error: 'Donation not available' });
    }
    res.status(500).json({ error: 'Server error' });
  }
});

// Complete donation
router.post('/:id/complete', auth, requireRole('volunteer'), async (req, res) => {
  try {
    const acceptance = await prisma.acceptance.findFirst({
      where: { donationId: req.params.id, volunteerId: req.user.id }
    });

    if (!acceptance) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    await prisma.$transaction([
      prisma.donation.update({
        where: { id: req.params.id },
        data: { status: 'completed', completedAt: new Date() }
      }),
      prisma.acceptance.update({
        where: { id: acceptance.id },
        data: { status: 'completed', completedAt: new Date() }
      })
    ]);

    res.json({ message: 'Donation completed' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Cancel donation (donor only)
router.delete('/:id', auth, requireRole('donor'), async (req, res) => {
  try {
    const donation = await prisma.donation.findFirst({
      where: { id: req.params.id, donorId: req.user.id, status: 'available' }
    });

    if (!donation) {
      return res.status(404).json({ error: 'Donation not found or cannot be cancelled' });
    }

    await prisma.donation.update({
      where: { id: req.params.id },
      data: { status: 'cancelled' }
    });

    res.json({ message: 'Donation cancelled' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;