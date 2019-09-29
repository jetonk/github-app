import React from 'react';
import { connect } from 'react-redux';
import { View, Linking } from 'react-native';
import { mainTypes } from 'app/types';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Right,
  Thumbnail,
  Text,
  List,
  ListItem,
} from 'native-base';
import ProfileInfo from 'app/components/ProfileInfo';
import styles from './styles';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  formatDate = date => {
    return new Date(date).toISOString().slice(0, 10);
  };

  openRepositoryURL = url => {
    Linking.openURL(url);
  };

  render() {
    const { user } = this.props;
    return (
      <Container>
        <Content>
          <CardItem>
            <View style={styles.avatar}>
              <Thumbnail source={{ uri: user.avatarUrl }} />
              <Text style={styles.nameLabel}>{user.name}</Text>
            </View>
            <ProfileInfo totalCount={user.starredRepositories.totalCount} text="Starred" />
            <ProfileInfo totalCount={user.followers.totalCount} text="Followers" />
            <ProfileInfo totalCount={user.following.totalCount} text="Following" />
          </CardItem>
          <Card>
            <CardItem>
              <Text>{user.bio}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text>Repositories</Text>
            </CardItem>
          </Card>
          <List>
            {user.repositories.nodes.map(repo => (
              <ListItem key={repo.name} onPress={() => this.openRepositoryURL(repo.url)}>
                <Body>
                  <Text>{repo.name}</Text>
                  <Text note>{repo.description}</Text>
                </Body>
                <Right>
                  <Text note>{this.formatDate(repo.pushedAt)}</Text>
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

Profile.propTypes = {
  user: mainTypes.user,
};

Profile.defaultProps = {
  user: {},
};

const mapStateToProps = ({ userReducer }) => {
  return { loading: userReducer.loading, user: userReducer.user };
};

export default connect(mapStateToProps)(Profile);
