import {
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');
const splashImage = require('../assets/spacex.jpg');

const appConfig = {
  splashImage,
  splashOverlayColor: 'rgba(34,34,34,0.7)',
  appNameFontColor: 'white',
  appNameFontSize: height * 0.05,
  appNameFontFamily: 'BrandonGrotesque-Black',
};

export default appConfig;
