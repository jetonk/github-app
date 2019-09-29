import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Header, Icon, Left, Right, Title, Body, Button } from 'native-base';

const styles = StyleSheet.create({
  white: {
    color: '#ffffff',
  },
});

const AppHeader = ({ title }) => (
  <Header style={{ backgroundColor: '#24292e' }}>
    <StatusBar backgroundColor="#24292e" />
    <Left>
      <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
        <Icon name="menu" style={styles.white} />
      </Button>
    </Left>
    <Body>
      <Title style={styles.white}>{title}</Title>
    </Body>
    <Right />
  </Header>
);

AppHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default AppHeader;
