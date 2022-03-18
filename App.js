import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingScreen from './src/screens/LandingScreen';
import BrowserScreen from './src/screens/BrowserScreen';
import StorageScreen from './src/screens/StorageScreen';
import PreviewScreen from './src/screens/PreviewScreen';

const navigator = createStackNavigator({
  Landing: LandingScreen,
  Browser: BrowserScreen,
  Storage: StorageScreen,
  Preview: PreviewScreen,
}, {
  initialRouteName: 'Landing',
  defaultNavigationOptions: {
    title: "TwitterBackupApp",
  }
});

export default createAppContainer(navigator);
