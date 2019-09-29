import React from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShowError from 'app/components/ShowError';
import UserCard from 'app/components/UserCard';
import { mainTypes } from 'app/types';
import { Container, Icon, Button, Content, Item, Input, Text, Spinner } from 'native-base';
import { fetchUserData, clear } from 'app/actions';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Github App',
  };

  state = {
    search: 'jetonk',
    fadeValue: new Animated.Value(0),
  };

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

  showSpinner = () => {
    const { loading } = this.props;
    if (loading) {
      return <Spinner color="#24292e" />;
    }
  };

  render() {
    const { search, user, error, navigation } = this.props;
    return (
      <Container>
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
            <Button transparent onPress={() => this.props.clear()}>
              <Icon name="ios-close" />
            </Button>
            <Button transparent disabled={search === ''} onPress={() => this.searchUser()}>
              <Text>Search</Text>
            </Button>
          </Item>
          {this.renderError()}
          {this.showSpinner()}
          <UserCard user={user} error={error} navigation={navigation} />
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserData, clear }, dispatch);
};

const mapStateToProps = ({ userReducer }) => {
  return {
    loading: userReducer.loading,
    search: userReducer.search,
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
