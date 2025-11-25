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

### Building Android App Bundle (AAB)

The project is configured to build an Android App Bundle (`.aab`) for distribution on Google Play Store.

#### Development/Debug Build

For local development, the app uses the debug keystore by default:

```bash
# Build the web app
npm run build

# Sync with Android
npx cap sync android

# Build the AAB
cd android && ./gradlew bundleRelease
```

The AAB will be available at: `android/app/build/outputs/bundle/release/app-release.aab`

#### Production/Release Build

For production builds, generate a signing key first:

```bash
keytool -genkey -v -keystore my-fitness-journey-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-fitness-journey
```

Then configure the following environment variables before building:

```bash
export ANDROID_KEYSTORE_PATH=/path/to/my-fitness-journey-release-key.jks
export ANDROID_KEYSTORE_PASSWORD=your_keystore_password
export ANDROID_KEY_ALIAS=my-fitness-journey
export ANDROID_KEY_PASSWORD=your_key_password
```

#### CI/CD Build

The GitHub Actions workflow automatically builds the AAB on push to main/master. For production releases in CI/CD, add the keystore and credentials as GitHub Secrets:
- `ANDROID_KEYSTORE_PATH`: Path to the keystore file
- `ANDROID_KEYSTORE_PASSWORD`: Keystore password
- `ANDROID_KEY_ALIAS`: Key alias
- `ANDROID_KEY_PASSWORD`: Key password

## Project Structure

```
My-Fitness-Journey/
├── android/          # Android native project
│   ├── app/          # Android app module
│   └── gradlew       # Gradle wrapper
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
