#!/bin/bash

# Script to generate Android keystore and configure for AAB builds
# This script should be run once to set up signing for release builds

echo "====================================="
echo "Android Keystore Setup"
echo "====================================="
echo ""

# Check if keystore already exists
if [ -f "my-fitness-journey-release-key.jks" ]; then
    echo "Warning: Keystore file 'my-fitness-journey-release-key.jks' already exists!"
    read -p "Do you want to overwrite it? (y/N): " overwrite
    if [ "$overwrite" != "y" ] && [ "$overwrite" != "Y" ]; then
        echo "Aborting."
        exit 1
    fi
    rm -f my-fitness-journey-release-key.jks
fi

# Check if keystore.properties already exists
if [ -f "android/keystore.properties" ]; then
    echo "Warning: android/keystore.properties already exists!"
    read -p "Do you want to overwrite it? (y/N): " overwrite_props
    if [ "$overwrite_props" != "y" ] && [ "$overwrite_props" != "Y" ]; then
        echo "Aborting."
        exit 1
    fi
fi

echo "Generating keystore..."
echo ""
echo "You will be prompted for:"
echo "1. Keystore password (remember this!)"
echo "2. Key password (can be the same as keystore password)"
echo "3. Your name, organization, etc."
echo ""

# Generate keystore
keytool -genkey -v \
    -keystore my-fitness-journey-release-key.jks \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000 \
    -alias my-fitness-journey

if [ $? -ne 0 ]; then
    echo "Failed to generate keystore"
    exit 1
fi

echo ""
echo "Keystore generated successfully!"
echo ""

# Get the absolute path to the keystore
KEYSTORE_PATH="$(pwd)/my-fitness-journey-release-key.jks"

# Prompt for passwords to create keystore.properties
echo "Creating android/keystore.properties..."
read -sp "Enter keystore password: " STORE_PASSWORD
echo ""
read -sp "Enter key password: " KEY_PASSWORD
echo ""

# Create keystore.properties
cat > android/keystore.properties <<EOF
storeFile=$KEYSTORE_PATH
storePassword=$STORE_PASSWORD
keyAlias=my-fitness-journey
keyPassword=$KEY_PASSWORD
EOF

echo ""
echo "====================================="
echo "Setup Complete!"
echo "====================================="
echo ""
echo "Keystore location: $KEYSTORE_PATH"
echo "Properties file: android/keystore.properties"
echo ""
echo "IMPORTANT:"
echo "1. Keep your keystore file safe - you cannot recover it if lost!"
echo "2. Do NOT commit the keystore or keystore.properties to Git"
echo "3. Both files are already in .gitignore"
echo ""
echo "To build the release AAB, run:"
echo "  cd android"
echo "  ./gradlew bundleRelease"
echo ""
echo "The AAB will be at: android/app/build/outputs/bundle/release/app-release.aab"
echo ""
