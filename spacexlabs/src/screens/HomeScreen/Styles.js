import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppConfig from '../../config/theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppConfig.homeBackgroundColor,
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  gridView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    height: height * 0.17,
    width: '33.33%',
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    color: 'white',
    fontFamily: AppConfig.appFontFamilyLight,
  },
});

export default styles;
