import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { mainTypes } from 'app/types';
import { Container, Content, Button, Icon } from 'native-base';
import UserCard from 'app/components/UserCard';
import styles from './styles';

class RecentUsers extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Recent Users',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerLeft: (
        <Button transparent onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" />
        </Button>
      ),
      headerRight: <View />,
    };
  };

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Content />
      </Container>
    );
  }
}

RecentUsers.propTypes = {
  user: mainTypes.user,
};

RecentUsers.defaultProps = {
  user: {},
};

const mapStateToProps = ({ userReducer }) => {
  return { loading: userReducer.loading, user: userReducer.user };
};

export default connect(mapStateToProps)(Profile);
