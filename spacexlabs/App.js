/**
 * Root File
 *
 * @format
 * @flow
 */

import {
  StackNavigator,
} from 'react-navigation';

import { fadeIn } from 'react-navigation-transitions';

import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Home: { screen: HomeScreen },
}, {
  transitionConfig: () => fadeIn(1000),
  headerMode: 'screen',
});

export default App;
