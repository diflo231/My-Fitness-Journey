# My Fitness Journey

A fitness tracking mobile application built with Capacitor.

## Building the Android App Bundle (AAB)

### Prerequisites
- Node.js (v18+)
- Java JDK 17
- Android SDK

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the web app:**
   ```bash
   npm run build
   ```

3. **Sync Capacitor with Android:**
   ```bash
   npx cap sync android
   ```

4. **Build the AAB file:**
   ```bash
   cd android
   chmod +x gradlew
   ./gradlew bundleRelease
   ```

The AAB file will be generated at:
`android/app/build/outputs/bundle/release/app-release.aab`

### Automated Build with GitHub Actions

The repository includes a GitHub Actions workflow (`.github/workflows/main.yml`) that automatically builds the AAB file on every push to main/master branches. The built AAB is available as a downloadable artifact from the Actions tab.

### Signing the App (for Production)

For production releases, you'll need to sign the AAB:

1. **Generate a keystore:**
   ```bash
   keytool -genkey -v -keystore my-fitness-journey-release-key.jks \
     -keyalg RSA -keysize 2048 -validity 10000 \
     -alias my-fitness-journey
   ```

2. **Configure signing in `android/app/build.gradle`:**
   Add the signing configuration in the `android` block:
   ```gradle
   signingConfigs {
       release {
           storeFile file("../my-fitness-journey-release-key.jks")
           storePassword "YOUR_KEYSTORE_PASSWORD"
           keyAlias "my-fitness-journey"
           keyPassword "YOUR_KEY_PASSWORD"
       }
   }
   buildTypes {
       release {
           signingConfig signingConfigs.release
           minifyEnabled false
           proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
       }
   }
   ```

3. **Important:** Never commit your keystore file or passwords to version control!
