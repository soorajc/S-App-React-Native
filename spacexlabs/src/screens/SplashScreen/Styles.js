import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppConfig from '../../config/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  splashImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: AppConfig.splashOverlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: AppConfig.appNameFontColor,
    fontSize: AppConfig.appNameFontSize,
    textAlign: 'center',
    width: 0.80 * width,
    fontFamily: AppConfig.appNameFontFamily,
  },
});

export default styles;
