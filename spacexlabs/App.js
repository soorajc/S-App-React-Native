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

const App = StackNavigator({
  SplashScreen: { screen: SplashScreen },
}, {
  transitionConfig: () => fadeIn(1000),
  headerMode: 'screen',
});

export default App;
