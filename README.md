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

To create a release build, you'll need to generate a signing key:

```bash
keytool -genkey -v -keystore my-fitness-journey-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-fitness-journey
```

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
