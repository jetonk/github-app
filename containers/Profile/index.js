import React from 'react';
import { connect } from 'react-redux';
import AppHeader from 'app/components/AppHeader';
import PropTypes from 'prop-types';
import { mainTypes } from 'app/types/';
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

class Profile extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { user, navigation } = this.props;
    return (
      <Container>
        <AppHeader title={user.name} />
        <Content padder>
          <Text>Profile !!!</Text>
        </Content>
      </Container>
    );
  }
}

Profile.propTypes = {
  user: mainTypes.user,
  navigation: mainTypes.navigation,
};

Profile.defaultProps = {
  user: {},
  navigation: undefined,
};

const mapStateToProps = ({ userReducer }) => {
  return { loading: userReducer.loading, user: userReducer.user };
};

export default connect(mapStateToProps)(Profile);
