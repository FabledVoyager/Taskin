# TASKIN

A simple React Native + Expo application with three sections:

- **Dashboard** — three numbered placeholder widgets ready for future features
- **History** — an empty state ready for activity data
- **Settings** — starter preference controls

The project uses TypeScript, Expo Router, the React Native New Architecture, Expo SDK 54, and EAS build profiles.

## Requirements

- Node.js 20 LTS or newer
- npm
- Expo Go on a physical device, or an Android/iOS simulator

## Run locally

```bash
npm install
npx expo start
```

After the development server starts:

- Scan the QR code with Expo Go.
- Press `a` to open Android.
- Press `i` to open the iOS Simulator (macOS only).
- Press `w` to open the web version.

You can also use the included scripts:

```bash
npm run android
npm run ios
npm run web
npm run lint
npm run typecheck
```

## EAS setup and builds

The included `eas.json` has development, preview, and production profiles. Link the app to your Expo account once:

```bash
npx eas-cli login
npx eas-cli init
```

Then create a build:

```bash
# Internal development client
npx eas-cli build --profile development --platform android

# Internal preview build
npx eas-cli build --profile preview --platform all

# Store-ready production build
npx eas-cli build --profile production --platform all
```

Before publishing to an app store, replace `com.taskin.app` in `app.json` with a bundle/package identifier that you own.

## Project structure

```text
app/
  (tabs)/
    index.tsx       Dashboard
    history.tsx     History
    settings.tsx    Settings
components/
  widget-card.tsx   Reusable numbered widget
constants/
  colors.ts         App color tokens
eas.json            EAS build profiles
```
