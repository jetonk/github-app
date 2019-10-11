import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShowError from 'app/components/ShowError';
import UserCard from 'app/components/UserCard';
import { mainTypes } from 'app/types';
import { Container, Icon, Button, Content, Item, Input, Text, Spinner } from 'native-base';
import { searchUser, fetchSearchData, setUserData, clear } from 'app/actions';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Github App',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
    },
  };

  state = {
    fadeValue: new Animated.Value(0),
  };

  handleSearchUser = async () => {
    const { fadeValue } = this.state;
    const { search } = this.props;
    if (search !== '') {
      await this.props.fetchSearchData(search);
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

  showSpinner = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner color="#24292e" />;
    }
  };

  showUser = async user => {
    const { navigation } = this.props;
    this.props.setUserData(user);
    navigation.navigate('Profile', user);
  };

  render() {
    const { search, users, error } = this.props;
    return (
      <Container>
        <Content bounces={false} padder>
          <Item rounded searchBar>
            <Icon name="ios-search" />
            <Input
              placeholder="Type Github User"
              value={search}
              onChangeText={val => this.props.searchUser(val)}
              returnKeyType="search"
              onSubmitEditing={this.handleSearchUser}
            />
            <Button transparent onPress={() => this.props.clear()}>
              <Icon name="ios-close" />
            </Button>
            <Button transparent disabled={search === ''} onPress={() => this.handleSearchUser()}>
              <Text>Search</Text>
            </Button>
          </Item>
          {this.renderError()}
          {this.showSpinner()}
          {users.map(user => {
            if (user.node.name) {
              return (
                <UserCard
                  key={user.node.login}
                  user={user.node}
                  error={error}
                  showUser={this.showUser}
                />
              );
            }
          })}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchUser, fetchSearchData, setUserData, clear }, dispatch);
};

const mapStateToProps = ({ userReducer }) => {
  return {
    loading: userReducer.loading,
    search: userReducer.search,
    users: userReducer.users,
    user: userReducer.user,
    error: userReducer.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = mainTypes;

Home.defaultProps = {
  user: undefined,
  error: undefined,
};
