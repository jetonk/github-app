import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Body, Text } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorMsg: {
    color: 'red',
  },
});

const ShowError = ({ message }) => (
  <Card>
    <CardItem>
      <Body>
        <Text style={styles.errorMsg}>{message}</Text>
      </Body>
    </CardItem>
  </Card>
);

ShowError.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ShowError;
