import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppConfig from '../../config/theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  launchImage: {
    height: 0.45 * height,
    width,
    resizeMode: 'stretch',
    backgroundColor: AppConfig.imageOverlayColor,
  },
  paddingView: {
    height: '85%',
  },
  overlay: {
    height: '15%',
    width: '100%',
    backgroundColor: AppConfig.imageOverlayColor,
    flexDirection: 'row',
  },
  titleContainer: {
    width: '70%',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  buttonContainer: {
    width: '30%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchTitle: {
    color: AppConfig.appFontColor,
    fontFamily: AppConfig.appFontFamily,
    fontSize: height * 0.03,
    width: '80%',
  },
  viewDetailsLabel: {
    color: AppConfig.blackLabel,
    fontFamily: AppConfig.appFontFamilyLight,
    fontSize: height * 0.02,
  },
});

export default styles;
