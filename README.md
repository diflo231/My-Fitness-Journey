# My Fitness Journey

A mobile fitness tracking application to help you monitor your health and fitness goals.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/diflo231/My-Fitness-Journey.git
cd My-Fitness-Journey
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## 📱 Mobile Setup (Optional)

If you want to build for Android:

1. Add Android platform:
```bash
npx cap add android
```

2. Update Android platform:
```bash
npx cap update android
```

3. Sync with Capacitor:
```bash
npx cap sync
```

### Android Signing

To generate a keystore for release builds:

```bash
keytool -genkey -v -keystore my-fitness-journey-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-fitness-journey
```

Then configure in your `gradle.properties`:
```
storePassword=YOUR_KEYSTORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=my-fitness-journey
storeFile=../my-fitness-journey-release-key.jks
```

⚠️ **Important:** Never commit `gradle.properties` with real passwords to version control. Add it to `.gitignore` or use environment variables instead.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License
