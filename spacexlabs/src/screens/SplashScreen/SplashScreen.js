/**
 * Splash Screen
 * Displayed at launching of the screen
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StackActions,
  NavigationActions,
  NavigationEvents,
} from 'react-navigation';
import {
  ImageBackground,
  View,
  Text,
} from 'react-native';

import AppConfig from '../../config/appconfig';
import AppTheme from '../../config/theme';
import Styles from './Styles';

type Props = {};
export default class SplashScreen extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  handleScreenSwitching() {
    const interval = 2000;
    // setTimeout(() => this.launchHomeScreen(), interval);
  }

  launchHomeScreen() {
    const { navigation } = this.props;
    const { dispatch } = navigation;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    dispatch(resetAction);
  }

  render() {
    return (
      <ImageBackground
        source={AppTheme.splashImage}
        style={Styles.splashImage}
        resizeMode="cover"

      >
        <NavigationEvents
          onDidFocus={payload => this.handleScreenSwitching(payload)}
        />
        <View style={Styles.overlay}>
          <Text style={Styles.appName}>
            {AppConfig.appName}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
