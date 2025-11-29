# ShareMeal - Food Donation Platform

ShareMeal is a comprehensive food donation platform that connects food donors with volunteers to reduce food waste and fight hunger in communities. The application enables seamless coordination between donors who want to share excess food and volunteers who help distribute it to those in need.


## ✨ Features

### Core Functionality
- **User Authentication & Authorization**: Secure registration and login with role-based access control (Donor/Volunteer)
- **Food Donation Management**: Create, view, and manage food donations with photos
- **Volunteer Matching**: Smart matching system to connect donations with nearby volunteers
- **Real-time Analytics**: Track meals served, donations, and community impact
- **Rating System**: Donors can rate volunteers after successful donations
- **Image Upload**: Support for multiple photos per donation

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL (via Prisma ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **File Upload**: Multer
- **Rate Limiting**: express-rate-limit
- **Validation**: Built-in Express validation

### Frontend
- **Framework**: React Native
- **Platform**: Expo
- **UI Library**: React Native Paper
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **State Management**: React Context API
- **Local Storage**: AsyncStorage
- **Image Picker**: Expo Image Picker
- **Icons**: Expo Vector Icons, Material Icons

## 📁 Project Structure

```
ShareMeal/
├── backend/
│   ├── middleware/
│   │   ├── auth.js              # JWT authentication middleware
│   │   └── authorisation.js     # Role-based authorization
│   ├── prisma/
│   │   ├── schema.prisma        # Database schema
│   │   └── migrations/          # Database migrations
│   ├── src/
│   │   ├── auth/                # Authentication routes & controllers
│   │   ├── users/               # User management
│   │   ├── donations/           # Donation CRUD operations
│   │   ├── volunteers/          # Volunteer-specific features
│   │   ├── donors/              # Donor-specific features
│   │   ├── matching/            # Smart matching algorithm
│   │   └── analytics/           # Analytics & statistics
│   └── server.js               # Express server setup
│
└── frontend/
    ├── src/
    │   ├── context/
    │   │   └── AuthContext.jsx  # Authentication context
    │   ├── navigation/
    │   │   └── TabNavigator.jsx  # Bottom tab navigation
    │   └── screens/
    │       ├── Splash/          # Splash screen
    │       ├── Login/           # Login screen
    │       ├── Register/        # Registration screen
    │       ├── Home/            # Home dashboard
    │       ├── Donate/          # Donation screens
    │       ├── Volunteer/       # Volunteer dashboard
    │       └── Profile/         # User profile
    └── assets/                  # Images and static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL database
- Expo CLI (for frontend)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the backend directory:
   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/sharemeal"
   JWT_SECRET="your-secret-key"
   PORT=3000
   ```

4. **Set up database**
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

5. **Start the server**
   ```bash
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Expo development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on specific platform**
   ```bash
   npm run ios      # iOS simulator
   npm run android # Android emulator
   npm run web      # Web browser
   ```

## 🔧 Backend Features

### Authentication & Authorization
- **User Registration**: Create new accounts with email, password, name, phone, and role
- **User Login**: JWT-based authentication
- **Role-Based Access Control**: Separate permissions for Donors and Volunteers
- **Password Security**: bcrypt hashing for password storage
- **JWT Tokens**: Secure token-based authentication

### Donation Management
- **Create Donation**: Donors can create donations with:
  - Food type and quantity
  - Pickup address and area
  - Preferred pickup time
  - Contact information
  - Multiple photos
  - Suggested volunteer (optional)
- **View Donations**: Filter and sort donations by:
  - Area/location
  - Status (available, accepted, completed, cancelled)
  - Pickup time
  - Creation date
- **Accept Donation**: Volunteers can accept available donations
- **Complete Donation**: Volunteers mark donations as completed
- **Status Tracking**: Real-time status updates (available → accepted → completed)

### Smart Matching System
- **Volunteer Matching**: Algorithm to match donations with nearby volunteers
- **Donation Suggestions**: Donors can suggest specific volunteers
- **Location-Based Matching**: Match based on area and proximity

### Analytics & Statistics
- **Platform Metrics**:
  - Total meals served
  - Active donations count
  - Completed donations count
  - Area-wise statistics
- **Donor Statistics**:
  - Total donations made
  - Total meals shared
  - Completed donations count
- **Volunteer Dashboard**: Volunteer-specific statistics and tasks

### User Management
- **Profile Management**: View and update user profiles
- **Donor Profile**: Track donation history and statistics
- **Volunteer Profile**: Track volunteer activities and dashboard

### Rating System
- **Donor Ratings**: Donors can rate volunteers after donation completion
- **Rating Details**: 1-5 star ratings with optional comments
- **Rating History**: Track all ratings given and received

### File Upload
- **Image Upload**: Support for multiple donation photos
- **Static File Serving**: Serve uploaded images via `/uploads` endpoint
- **Multer Integration**: Handle multipart/form-data for file uploads

### Security Features
- **CORS**: Cross-Origin Resource Sharing enabled
- **Rate Limiting**: Prevent API abuse with express-rate-limit
- **Input Validation**: Server-side validation for all inputs
- **Error Handling**: Comprehensive error handling and responses

## 📱 Frontend Features

### Authentication Screens
- **Splash Screen**: App loading screen with branding
- **Login Screen**: User authentication with email and password
- **Register Screen**: New user registration with role selection
- **Auth Context**: Global authentication state management
- **Persistent Login**: AsyncStorage for session persistence

### Home Screen
- **Dynamic Greeting**: Time-based greetings (Good Morning/Afternoon/Evening)
- **Statistics Dashboard**: 
  - Total meals served
  - Active donations
  - Completed donations
  - Total volunteers
  - Communities served
- **Quick Actions**: 
  - Donate Food button
  - Volunteer button
- **How It Works Section**: 
  - Step-by-step process visualization
  - Images for each step
  - Step badges and icons
- **Community Impact Stories**: 
  - Community Kitchen Initiative
  - School Meal Program
  - Image backgrounds with overlay text
- **Mission Statement**: 
  - Platform mission and values
  - Mission statistics (100% Transparent, 24/7 Available, Free Service)
  - Background image with overlay

### Donation Screens
- **Donate Screen**: 
  - List of user's donations
  - Donation status (Available, Accepted, Cancelled)
  - Create new donation button
- **Create Donation Form**: 
  - Food type input
  - Quantity input
  - Address and area selection
  - Contact information
  - Pickup time selection
  - Multiple image picker
  - Notes/instructions field
  - Form validation
  - Image preview
  - Local storage integration

### Volunteer Dashboard
- **Dashboard Tabs**: 
  - Available Donations tab
  - My Tasks tab
- **Filter Section**: 
  - Search by area or food type
  - Sort options (nearest, earliest, newest)
  - Food type filter (all, veg, non-veg)
  - Packaging filter (all, packaged, fresh)
- **Donation Cards**: 
  - Food type and description
  - Location and distance
  - Pickup time
  - Meal count
  - Veg/Non-veg indicator
  - Packaged/Fresh indicator
  - Food images
  - Accept button
- **Donation Details Modal**: 
  - Full donation information
  - Donor contact details
  - Pickup instructions
  - Full address
  - Accept functionality
- **My Tasks Section**: 
  - Accepted donations list
  - Task completion functionality
  - Task details and status

### Profile Screen
- **User Profile**: Display user information and statistics

### Navigation
- **Bottom Tab Navigator**: 
  - Home tab
  - Donate tab
  - Volunteer tab
  - Profile tab
- **Stack Navigator**: 
  - Splash → Main navigation
  - Create Donation Form screen
- **Screen Transitions**: Smooth navigation between screens

### UI/UX Features
- **React Native Paper**: Material Design components
- **Custom Styling**: Consistent design system
- **Image Support**: Multiple image formats (JPG, PNG, WEBP)
- **Icons**: Material Icons and Community Icons
- **Safe Area**: Proper handling of device safe areas
- **Responsive Design**: Adapts to different screen sizes
- **Loading States**: Loading indicators where needed
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time form validation

### Assets & Images
- **Food Images**: Various food donation images
- **Community Images**: Community kitchen and donation images
- **Form Images**: Form and donation process images
- **Splash Image**: App branding image
- **Icons**: App icon and UI icons

## 📡 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication Endpoints

#### Register
```
POST /auth/register
Body: {
  name: string,
  email: string,
  password: string,
  phone?: string,
  role: "donor" | "volunteer"
}
```

#### Login
```
POST /auth/login
Body: {
  email: string,
  password: string
}
Response: {
  token: string,
  user: User
}
```

### Donation Endpoints

#### Create Donation
```
POST /donations
Headers: { Authorization: "Bearer <token>" }
Body: {
  foodType: string,
  approxQuantity: number,
  quantityUnit?: string,
  area: string,
  pickupAddress: string,
  preferredPickupTime?: DateTime,
  contactNumber?: string,
  photos?: string[],
  suggestedVolunteerId?: string
}
```

#### Get Donations
```
GET /donations?area=&status=&sort=&page=&limit=
Headers: { Authorization: "Bearer <token>" }
```

#### Accept Donation
```
POST /donations/:id/accept
Headers: { Authorization: "Bearer <token>" }
Role: volunteer
```

#### Complete Donation
```
POST /donations/:id/complete
Headers: { Authorization: "Bearer <token>" }
Role: volunteer
```

### User Endpoints

#### Get Profile
```
GET /users/profile
Headers: { Authorization: "Bearer <token>" }
```

#### Update Profile
```
PUT /users/profile
Headers: { Authorization: "Bearer <token>" }
Body: { name?, phone?, ... }
```

### Volunteer Endpoints

#### Get Volunteer Profile
```
GET /volunteers/profile
Headers: { Authorization: "Bearer <token>" }
Role: volunteer
```

#### Get Volunteer Dashboard
```
GET /volunteers/dashboard
Headers: { Authorization: "Bearer <token>" }
Role: volunteer
```

### Donor Endpoints

#### Get Donor Profile
```
GET /donors/profile
Headers: { Authorization: "Bearer <token>" }
Role: donor
```

#### Create Rating
```
POST /donors/ratings
Headers: { Authorization: "Bearer <token>" }
Role: donor
Body: {
  donationId: string,
  volunteerId: string,
  rating: number (1-5),
  comment?: string
}
```

### Matching Endpoints

#### Get Matched Donations
```
GET /matching/donations
Headers: { Authorization: "Bearer <token>" }
Role: volunteer
```

#### Suggest Volunteer
```
POST /matching/suggest
Headers: { Authorization: "Bearer <token>" }
Role: donor
Body: {
  donationId: string,
  volunteerId: string
}
```

### Analytics Endpoints

#### Get Platform Metrics
```
GET /analytics/metrics
Headers: { Authorization: "Bearer <token>" }
Response: {
  totalMealsServed: number,
  activeDonations: number,
  completedDonations: number,
  areaStats: Array<{
    area: string,
    donationsCount: number,
    mealsServed: number
  }>
}
```

#### Get Donor Statistics
```
GET /analytics/donor/:donorId
Headers: { Authorization: "Bearer <token>" }
Response: {
  totalDonations: number,
  totalMealsShared: number,
  completedDonations: number
}
```

## 🗄 Database Schema

### Models

#### User
- `id`: UUID (Primary Key)
- `name`: String
- `email`: String (Unique)
- `phone`: String (Optional)
- `password`: String (Hashed)
- `role`: String ("donor" | "volunteer")
- `createdAt`: DateTime

#### Donation
- `id`: UUID (Primary Key)
- `donorId`: UUID (Foreign Key → User)
- `foodType`: String
- `approxQuantity`: Integer
- `quantityUnit`: String (default: "portions")
- `area`: String
- `pickupAddress`: String
- `preferredPickupTime`: DateTime (Optional)
- `contactNumber`: String (Optional)
- `status`: String (default: "available")
- `suggestedVolunteerId`: UUID (Optional)
- `createdAt`: DateTime
- `acceptedAt`: DateTime (Optional)
- `completedAt`: DateTime (Optional)

#### DonationPhoto
- `id`: UUID (Primary Key)
- `donationId`: UUID (Foreign Key → Donation)
- `url`: String

#### Acceptance
- `id`: UUID (Primary Key)
- `donationId`: UUID (Foreign Key → Donation)
- `volunteerId`: UUID (Foreign Key → User)
- `status`: String (default: "accepted")
- `acceptedAt`: DateTime
- `completedAt`: DateTime (Optional)

#### Rating
- `id`: UUID (Primary Key)
- `donationId`: UUID (Foreign Key → Donation)
- `donorId`: UUID (Foreign Key → User)
- `volunteerId`: UUID (Foreign Key → User)
- `rating`: Integer (1-5)
- `comment`: String (Optional)
- `createdAt`: DateTime

## 🔐 Environment Variables

### Backend (.env)
```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/sharemeal"

# JWT
JWT_SECRET="your-secret-key-here"

# Server
PORT=3000

# File Upload
UPLOAD_DIR="./uploads"
```

## 📦 Dependencies

### Backend Dependencies
- `express`: Web framework
- `@prisma/client`: Prisma ORM client
- `bcrypt`: Password hashing
- `jsonwebtoken`: JWT authentication
- `multer`: File upload handling
- `cors`: Cross-origin resource sharing
- `dotenv`: Environment variable management
- `express-rate-limit`: API rate limiting

### Frontend Dependencies
- `react-native`: Mobile framework
- `expo`: React Native framework
- `react-native-paper`: Material Design components
- `@react-navigation/native`: Navigation library
- `@react-navigation/bottom-tabs`: Bottom tab navigation
- `@react-navigation/native-stack`: Stack navigation
- `@react-native-async-storage/async-storage`: Local storage
- `expo-image-picker`: Image selection
- `@expo/vector-icons`: Icon library

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

- ShareMeal Development Team

## 🙏 Acknowledgments

- Community volunteers and donors
- Open source contributors
- Food security organizations

---

**Note**: This is a comprehensive food donation platform designed to reduce food waste and help communities in need. For questions or support, please open an issue in the repository.

