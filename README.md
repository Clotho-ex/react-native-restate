# Restate - React Native Real Estate App

A modern, feature-rich real estate mobile application built with React Native and Expo. Browse properties, search listings, and explore real estate opportunities with an intuitive and beautiful user interface.

## ✨ Features

- **🔐 Authentication**: Secure Google OAuth integration via Appwrite
- **🏠 Property Listings**: Browse curated real estate properties with detailed information
- **🔍 Advanced Search**: Search properties by name, address, or type with real-time results
- **🎯 Smart Filters**: Filter properties by type (All, House, Condo, Villa, Apartment, etc.)
- **⭐ Featured Properties**: Highlighted premium listings with horizontal scrolling
- **📱 Tab Navigation**: Seamless navigation between Home, Explore, and Profile screens
- **👤 User Profiles**: Personalized user experience with avatar generation
- **🎨 Modern UI**: Beautiful interface built with NativeWind (Tailwind CSS)
- **📊 Property Details**: Comprehensive property information including ratings, prices, and images
- **🌐 Cross-Platform**: Runs on iOS, Android, and Web

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) (0.81.4)
- **Runtime**: [Expo](https://expo.dev) (~54.0)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (5.9.2)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Backend**: [Appwrite](https://appwrite.io) (React Native SDK 0.13.0)
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **State Management**: React Context API
- **Authentication**: Google OAuth via Appwrite
- **UI Components**: React Native core components with custom styling
- **Fonts**: Rubik family (Light, Regular, Medium, SemiBold, Bold, ExtraBold)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Expo Go** app on your mobile device ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- **Appwrite Account** and a configured project

### Optional (for native builds)

- **iOS Development**: macOS with Xcode installed for iOS builds
- **Android Development**: Android Studio with Android SDK for Android builds

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd react-native-restate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Appwrite Backend

1. Create an [Appwrite](https://appwrite.io) project
2. Set up the following collections in your Appwrite database:
   - **Properties**: Store property listings
   - **Galleries**: Store property images
   - **Reviews**: Store property reviews
   - **Agents**: Store real estate agent information
3. Configure Google OAuth provider in Appwrite Console
4. Note your Project ID, Database ID, and Collection IDs

### 4. Environment Configuration

Create a `.env` file in the root directory (or configure via Expo):

```env
EXPO_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
EXPO_PUBLIC_APPWRITE_PROJECT_ID=<your-project-id>
EXPO_PUBLIC_APPWRITE_DATABASE_ID=<your-database-id>
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=<properties-collection-id>
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=<galleries-collection-id>
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=<reviews-collection-id>
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=<agents-collection-id>
```

### 5. Update App Scheme

In `app.json`, update the `scheme` field with your Appwrite Project ID:

```json
"scheme": "appwrite-callback-<YOUR_PROJECT_ID>"
```

## 🏃 Running the App

### Using Expo Go (Recommended)

1. Start the development server:

```bash
npm start
```

2. Scan the QR code with your device:
   - **iOS**: Use the Camera app to scan the QR code
   - **Android**: Use the Expo Go app to scan the QR code

3. The app will open in Expo Go on your device

### Run on Specific Platforms (Optional)

For native builds, you can run:

```bash
# iOS Simulator (Mac only, requires Xcode)
npm run ios

# Android Emulator (requires Android Studio)
npm run android

# Web Browser
npm run web
```

**Note**: Native builds (`ios` and `android` commands) create development builds and require the respective development environments installed.

## 📁 Project Structure

```
react-native-restate/
├── app/                          # Application screens (file-based routing)
│   ├── (root)/
│   │   ├── (tabs)/
│   │   │   ├── index.tsx        # Home screen
│   │   │   ├── explore.tsx      # Explore screen
│   │   │   └── profile.tsx      # Profile screen
│   │   ├── properties/
│   │   │   └── [id].tsx         # Property details (dynamic route)
│   │   └── _layout.tsx          # Root layout
│   ├── _layout.tsx              # App entry layout
│   ├── sign-in.tsx              # Sign-in screen
│   └── globals.css              # Global styles
├── components/                   # Reusable UI components
│   ├── Cards.tsx                # Card & FeaturedCard components
│   ├── Filters.tsx              # Property filter component
│   ├── Search.tsx               # Search input component
│   └── NoResults.tsx            # Empty state component
├── lib/                         # Utilities & configuration
│   ├── appwrite.ts              # Appwrite SDK setup & API functions
│   ├── global-provider.tsx      # Global context provider
│   ├── useAppwrite.ts           # Custom Appwrite hook
│   ├── data.ts                  # Static data
│   └── seed.ts                  # Database seeding script
├── constants/                   # Application constants
│   ├── data.ts                  # Static data definitions
│   ├── icons.ts                 # Icon exports
│   └── images.ts                # Image exports
├── assets/                      # Static assets
│   ├── fonts/                   # Rubik font family
│   └── images/                  # App images & icons
├── android/                     # Android native code
├── ios/                         # iOS native code
├── app.json                     # Expo configuration
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
└── tailwind.config.js           # Tailwind/NativeWind configuration
```

## 🎨 Key Components

### Cards Component

Displays property cards with images, ratings, prices, and addresses in both standard and featured layouts.

### Search Component

Real-time search functionality with debouncing to efficiently query properties.

### Filters Component

Horizontal scrollable filter chips for property type selection.

### NoResults Component

User-friendly empty state displayed when no properties match the search criteria.

## 🔧 Available Scripts

```bash
npm start              # Start Expo development server
npm run android        # Run on Android emulator/device
npm run ios            # Run on iOS simulator/device
npm run web            # Run in web browser
npm run lint           # Run ESLint for code quality
npm run reset-project  # Reset project to blank state
```

## 🧪 Development Features

- **Hot Reload**: Instant updates during development
- **Type Safety**: Full TypeScript support with strict typing
- **Code Quality**: ESLint configuration with Expo standards
- **File-based Routing**: Automatic route generation via Expo Router
- **Typed Routes**: TypeScript-aware routing with autocomplete
- **React Compiler**: Experimental React compiler enabled for optimization

## 🔐 Authentication Flow

1. User taps "Sign in with Google" button
2. App initiates OAuth flow via Appwrite
3. Web browser opens Google authentication
4. User authorizes the application
5. Deep link redirects back to app with credentials
6. Session is created and stored
7. User is authenticated and redirected to home screen

## 📱 Screen Overview

### Home (Index)

- User greeting with avatar
- Search bar with real-time filtering
- Featured properties carousel
- Recommended properties grid
- Property type filters

### Explore

- Full property catalog
- Advanced search and filtering
- Grid layout for browsing

### Profile

- User information
- Account settings
- Logout functionality

### Property Details

- Comprehensive property information
- Image gallery
- Agent details
- Reviews and ratings

## 🎯 Appwrite Collections Schema

### Properties Collection

```typescript
{
  image: string; // Property image URL
  rating: number; // Property rating (0-5)
  name: string; // Property name/title
  address: string; // Full address
  price: number; // Property price
  type: string; // Property type (house, condo, villa, etc.)
}
```

## 🐛 Troubleshooting

### Common Issues

**App won't start:**

- Clear Expo cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Restart the Metro bundler

**Can't scan QR code in Expo Go:**

- Ensure your computer and mobile device are on the same WiFi network
- Try using tunnel mode: `npx expo start --tunnel`
- Check that Expo Go is updated to the latest version

**Authentication not working:**

- Verify Appwrite endpoint and project ID in your environment variables
- Ensure Google OAuth is configured in Appwrite Console
- Check that the app scheme in `app.json` matches your Appwrite project ID
- OAuth redirects may not work perfectly in Expo Go; consider using a development build for full OAuth testing

**iOS build issues (Native builds only):**

- Run `cd ios && pod install` to update CocoaPods
- Clean build folder in Xcode

**Android build issues (Native builds only):**

- Clear Gradle cache: `cd android && ./gradlew clean`
- Ensure Android SDK is properly installed

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Appwrite Documentation](https://appwrite.io/docs)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Built with [Expo](https://expo.dev)
- Backend powered by [Appwrite](https://appwrite.io)
- UI styling with [NativeWind](https://www.nativewind.dev/)
- Icons from [React Native Vector Icons - MaterialCommunityIcons](https://static.enapter.com/rn/icons/material-community.html) via [@expo/vector-icons](https://icons.expo.fyi/)

---

**Made with ☕️ using React Native and Expo**
