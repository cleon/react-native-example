# LaunchDarkly Sample React Native Application (Metro+iOS)

## Build instructions
1. Open the `react-native-example` directory
2. Copy the mobile key from your account settings page from your LaunchDarkly dashboard into `FF.js`, save changes
3. Edit the user key in `FF.js`, save changes
4. Edit the feature flag key in `App.js`, save changes
5. Run `npm install` to download the dependencies for the application.
6. Install the iOS native module dependencies with `cd ios && pod install && cd ..`

## Running
1. Open the `react-native-example` directory
2. Deploy the app to your iOS simulator with `npx react-native run-ios`
3. Start Metro with `npx react-native start`
4. You may have to reload the app by typing 'r' in the Metro terminal window or clicking 'Reload' in the iOS Simulator