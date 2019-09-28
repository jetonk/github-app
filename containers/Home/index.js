import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
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
  Spinner,
} from 'native-base';
import styles from './styles';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: false,
    search: '',
    response: {},
  };

  searchUser = async () => {
    const { search } = this.state;
    if (search !== '') {
      this.setState({ loading: true });
      const response = await getUser(search);
      this.setState({ response, loading: false });
    }
  };

  renderError = response => {
    if (response.error) {
      return (
        <Card>
          <CardItem>
            <Body>
              <Text style={styles.errorMsg}>{response.message}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    }
  };

  showSpinner = () => {
    const { loading } = this.state;
    if (loading) {
      return <Spinner color="#24292e" />;
    }
  };

  render() {
    const { navigation } = this.props;
    const { search, response } = this.state;
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
              returnKeyType="search"
              onSubmitEditing={this.searchUser}
            />
            <Button transparent onPress={() => this.setState({ search: '' })}>
              <Icon name="ios-close" />
            </Button>
            <Button transparent disabled={search === ''} onPress={() => this.searchUser()}>
              <Text>Search</Text>
            </Button>
          </Item>
          {this.renderError(response)}
          {this.showSpinner()}
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
