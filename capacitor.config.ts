import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myfitnessjourney.app',
  appName: 'My Fitness Journey',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
