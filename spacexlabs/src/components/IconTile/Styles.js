import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import AppConfig from '../../config/theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  menuItem: {
    height: height * 0.17,
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    color: AppConfig.menuLabelColor,
    fontFamily: AppConfig.appFontFamilyLight,
  },
});

export default styles;
