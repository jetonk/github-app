import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import getUser from 'app/api/getUser';
import {
  Container,
  Header,
  Icon,
  Left,
  Right,
  Button,
  Title,
  Body,
  Content,
  Card,
  CardItem,
  Item,
  Input,
  Text,
} from 'native-base';
import styles from './styles';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
    user: {},
  };

  searchUser = async () => {
    const { search } = this.state;
    const user = await getUser(search);
    this.setState({ user });
  };

  renderUserNotFound = user => <Text>{user.message}</Text>;

  render() {
    const { navigation } = this.props;
    const { search, user } = this.state;
    return (
      <Container>
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
        <Content padder>
          <Item rounded searchBar>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              value={search}
              onChangeText={val => this.setState({ search: val })}
            />
            <Icon name="ios-close" />
            <Button transparent onPress={() => this.searchUser()}>
              <Text>Search</Text>
            </Button>
          </Item>
          {this.renderUserNotFound(user)}
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
