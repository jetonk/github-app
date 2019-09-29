import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from 'native-base';

const styles = StyleSheet.create({
  profileInfo: {
    paddingLeft: 40,
  },
  numberLabel: {
    fontSize: 22,
    textAlign: 'center',
  },
});

const ProfileInfo = ({ totalCount, text }) => (
  <View style={styles.profileInfo}>
    <Text style={styles.numberLabel}>{totalCount}</Text>
    <Text>{text}</Text>
  </View>
);

ProfileInfo.propTypes = {
  totalCount: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProfileInfo;
