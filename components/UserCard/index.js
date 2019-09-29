import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail, Text } from 'native-base';
import { mainTypes } from 'app/types';

const UserCard = ({ user, error, navigation }) => {
  if (Object.keys(user).length && !error.status) {
    return (
      <Card>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', user)}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: user.avatarUrl }} />
              <Body>
                <Text>{user.name}</Text>
                <Text note>{user.bio}</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableOpacity>
      </Card>
    );
  }
  return <></>;
};

UserCard.propTypes = {
  user: mainTypes.user,
  error: mainTypes.error,
  navigation: mainTypes.navigation,
};

UserCard.defaultProps = {
  user: {},
  error: {},
  navigation: undefined,
};
export default UserCard;
