import React from 'react';
import { StatusBar, Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShowError from 'app/components/ShowError';
import PropTypes from 'prop-types';
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
  Thumbnail,
} from 'native-base';
import { fetchUserData } from 'app/actions';
import styles from './styles';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    search: '',
    fadeValue: new Animated.Value(0),
  };

  componentDidMount = () => {};

  searchUser = async () => {
    const { search, fadeValue } = this.state;
    if (search !== '') {
      await this.props.fetchUserData(search);
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
  };

  renderError = () => {
    const { error } = this.props;
    const { fadeValue } = this.state;
    if (error.status) {
      return (
        <Animated.View
          style={{
            opacity: fadeValue,
          }}
        >
          <ShowError message={error.message} />
        </Animated.View>
      );
    }
  };

  renderUserCard = () => {
    const { user, error } = this.props;
    if (Object.keys(user).length && !error.status) {
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: user.avatarUrl }} />
              <Body>
                <Text>{user.name}</Text>
                <Text note>{user.bio}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      );
    }
  };

  showSpinner = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner color="#24292e" />;
    }
  };

  render() {
    const { navigation } = this.props;
    const { search } = this.state;
    return (
      <Container>
        <Header style={{ backgroundColor: '#24292e' }}>
          <StatusBar backgroundColor="#24292e" />
          <Left>
            <Button
              style={styles.btndrawerOpen}
              transparent
              onPress={() => navigation.navigate('DrawerOpen')}
            >
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
          {this.renderError()}
          {this.showSpinner()}
          {this.renderUserCard()}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserData }, dispatch);
};

const mapStateToProps = ({ userReducer }) => {
  return { loading: userReducer.loading, user: userReducer.user, error: userReducer.error };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    repositories: PropTypes.object,
  }),
  error: PropTypes.shape({
    status: PropTypes.bool,
    message: PropTypes.string,
  }),
};

Home.defaultProps = {
  user: undefined,
  error: undefined,
};
