# My Fitness Journey

A personal fitness journey tracking application built with JavaScript and Capacitor for mobile deployment.

## Features

- Track your workouts
- Monitor days active
- Set and achieve fitness goals
- Mobile-ready with Capacitor

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/diflo231/My-Fitness-Journey.git
cd My-Fitness-Journey

# Install dependencies
npm install

# Build the app
npm run build
```

### Running Locally

```bash
npm start
```

### Building for Android

```bash
# Add Android platform
npx cap add android

# Update Android platform
npx cap update android

# Sync web assets to Android
npx cap sync android
```

### Android Release Build

To create a release AAB (Android App Bundle), you'll need to:

1. Generate a signing key:

```bash
keytool -genkey -v -keystore my-fitness-journey-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-fitness-journey
```

2. Create a `keystore.properties` file in the `android` directory:

```properties
storeFile=/path/to/my-fitness-journey-release-key.jks
storePassword=your_store_password
keyAlias=my-fitness-journey
keyPassword=your_key_password
```

3. Build the AAB:

```bash
cd android
./gradlew bundleRelease
```

The AAB will be generated at: `android/app/build/outputs/bundle/release/app-release.aab`

**Note:** For CI/CD builds, the keystore and credentials should be stored as encrypted secrets.

## Project Structure

```
My-Fitness-Journey/
├── public/           # Static assets
│   ├── index.html    # Main HTML file
│   └── styles.css    # Application styles
├── src/              # Source files
│   └── index.js      # Main JavaScript
├── package.json      # Project configuration
└── capacitor.config.json  # Capacitor configuration
```

## License

MIT
