/**
 * Latest Launch Component
 *
 * @format
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles';

const LatestLaunch = ({ launchImage, launchTitle }) => (
  <ImageBackground
    source={{ uri: launchImage }}
    style={Styles.launchImage}
  >
    <View style={Styles.paddingView} />
    <View style={Styles.overlay}>
      <View style={Styles.titleContainer}>
        <Text
          numberOfLines={1}
          style={Styles.launchTitle}
        >
          {launchTitle}
        </Text>
      </View>
      <TouchableOpacity style={Styles.buttonContainer}>
        <Text style={Styles.viewDetailsLabel}>
          View Details
        </Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);


export default LatestLaunch;

LatestLaunch.defaultProps = {
  launchImage: '',
  launchTitle: '',
};

LatestLaunch.propTypes = {
  launchImage: PropTypes.string,
  launchTitle: PropTypes.string,
};
