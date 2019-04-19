/**
 * Loader Component
 */

import React, { Component } from 'react';
import {
  Modal,
  View,
  Image,
  Text,
} from 'react-native';

import AppConfig from '../../config/theme';
import Styles from './Styles';

export default class Loader extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => this.setModalVisible(true)}
      >
        <View style={Styles.loaderContainer}>
          <View style={Styles.loaderInnerContainer}>
            <Image
              style={Styles.loaderImage}
              source={AppConfig.loaderImage}
            />
          </View>
          <Text style={Styles.loadingLabel}>
            Loading Please Wait...
          </Text>
        </View>
      </Modal>
    );
  }
}
