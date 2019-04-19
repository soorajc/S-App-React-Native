/**
 * Home Screen
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';

import AppTheme from '../../config/theme';
import MenuItems from './MenuItems';
import IconTile from '../../components/IconTile/IconTile';
// import Loader from '../../components/Loader/Loader';
import LatestLaunch from '../../components/LatestLaunch/LatestLaunch';
import Styles from './Styles';

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.container}>
        <LatestLaunch
          launchTitle="ArabSat"
          launchImage="https://live.staticflickr.com/7911/32652060737_4be1171d4a_o.jpg"
        />
        <FlatList
          extraData={this.state}
          bounces={false}
          style={Styles.flatList}
          contentContainerStyle={Styles.gridView}
          data={MenuItems}
          numColumns={3}
          renderItem={({ item }) => (
            <IconTile
              iconName={item.icon}
              title={item.title}
              iconColor={AppTheme.menuIconColor}
              iconSize={AppTheme.menuIconSize}
            />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};
