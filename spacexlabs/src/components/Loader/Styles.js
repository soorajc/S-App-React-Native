import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppConfig from '../../config/theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: AppConfig.loaderOverlayColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderInnerContainer: {
    width: 0.10 * height,
    height: 0.10 * height,
    borderRadius: (0.10 * height) / 2,
    overflow: 'hidden',
  },
  loaderImage: {
    width: 0.10 * height,
    height: 0.10 * height,
    borderRadius: (0.10 * height) / 2,
    resizeMode: 'stretch',
  },
  loadingLabel: {
    color: AppConfig.appFontColor,
    fontFamily: AppConfig.appFontFamily,
    marginTop: '2%',
  },
});

export default styles;
