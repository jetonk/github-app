import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Header, Icon, Left, Title, Body, Text } from 'native-base';

const styles = StyleSheet.create({
  errorMsg: {
    color: 'red',
  },
});

const AppHeader = ({ title }) => (
  <Header style={{ backgroundColor: '#24292e' }}>
    <StatusBar backgroundColor="#24292e" />
    <Left>
      <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="menu" />
      </Button>
    </Left>
    <Body>
      <Title style={styles.body}>Github App</Title>
    </Body>
    <Right />
  </Header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default AppHeader;
