import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Avatar, useTheme } from 'react-native-paper';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const DonationCard = ({ donation, onAccept, onPress, isAccepted = false }) => {
  const theme = useTheme();
  const {
    foodType,
    quantity,
    area,
    pickupTime,
    donorName,
    meals,
    foodImage,
    isVeg,
    isPackaged
  } = donation;
  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          {foodImage ? (
            <Image
              source={typeof foodImage === 'string' ? { uri: foodImage } : foodImage}
              style={styles.foodImage}
              resizeMode="cover"
            />
          ) : (
            <MaterialIcons name="fastfood" size={40} color="#9e9e9e" />
          )}
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.headerRow}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodType}>{foodType}</Text>

              <View style={styles.infoRow}>
                <MaterialIcons name="location-on" size={16} color="#666" />
                <Text style={styles.infoText}>{area}</Text>
              </View>

              <View style={styles.infoRow}>
                <MaterialIcons name="access-time" size={16} color="#666" />
                <Text style={styles.infoText}>{pickupTime}</Text>
              </View>

              <View style={styles.chipContainer}>
                <View
                  style={[
                    styles.chip,
                    {
                      backgroundColor: isVeg ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                      borderColor: isVeg ? '#4CAF50' : '#F44336'
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: isVeg ? '#4CAF50' : '#F44336' }
                    ]}
                  >
                    {isVeg ? 'Veg' : 'Non-Veg'}
                  </Text>
                </View>

                <View
                  style={[
                    styles.chip,
                    {
                      backgroundColor: 'rgba(41, 128, 185, 0.1)',
                      borderColor: '#2980B9'
                    }
                  ]}
                >
                  <Text style={[styles.chipText, { color: '#2980B9' }]}>
                    {isPackaged ? 'Packaged' : 'Fresh'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.quantityContainer}>
              <Text style={styles.quantityText}>{quantity}</Text>
              <Text style={styles.mealsText}>servings</Text>
              <Text style={styles.mealsSubText}>~{meals} meals</Text>
            </View>
          </View>

          {donorName && (
            <Text style={styles.donorText}>
              Donated by: {donorName}
            </Text>
          )}
        </View>
      </View>

      <Card.Actions style={styles.cardActions}>
        <Button
          mode="contained"
          onPress={onAccept}
          disabled={isAccepted}
          style={[
            styles.actionButton,
            isAccepted && { backgroundColor: theme.colors.secondary }
          ]}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.buttonContent}
        >
          {isAccepted ? 'Accepted' : 'Accept Donation'}
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: 'white',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 12,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodInfo: {
    flex: 1,
    marginRight: 8,
  },
  foodType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  chipContainer: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 8,
    marginBottom: 4,
  },
  chipText: {
    fontSize: 11,
    fontWeight: '600',
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f9f6',
    borderRadius: 8,
    padding: 8,
    height: 70,
    minWidth: 70,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1ABC9C',
  },
  mealsText: {
    fontSize: 10,
    color: '#666',
    fontWeight: '500',
  },
  mealsSubText: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
  },
  donorText: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    fontStyle: 'italic',
  },
  cardActions: {
    padding: 12,
    paddingTop: 0,
    justifyContent: 'center',
  },
  actionButton: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#1ABC9C',
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 2,
  },
  buttonContent: {
    height: 44,
  },
});

export default DonationCard;
