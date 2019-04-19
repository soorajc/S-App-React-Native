import {
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');
const splashImage = require('../assets/spacex.jpg');
const loaderImage = require('../assets/loader.gif');

const appConfig = {
  splashImage,
  splashOverlayColor: 'rgba(34,34,34,0.7)',
  appNameFontColor: 'white',
  appNameFontSize: height * 0.05,
  appNameFontFamily: 'BrandonGrotesque-Black',
  homeBackgroundColor: '#0B0B0B',
  appFontColor: 'white',
  appFontFamily: 'BrandonGrotesque-Black',
  appFontFamilyLight: 'BrandonGrotesque-Light',
  blackLabel: '#3A3A3A',
  imageOverlayColor: 'rgba(20, 31, 49, 0.8)',
  loaderImage,
  loaderOverlayColor: 'rgba(20, 31, 49, 0.8)',
  menuLabelColor: 'white',
  menuIconColor: '#8b939b',
  menuIconSize: 30,
};

export default appConfig;
