import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail, Text } from 'native-base';

import { homeTypes } from 'app/types/';

const UserCard = ({ user, error, navigation }) => {
  if (Object.keys(user).length && !error.status) {
    return (
      <Card>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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
  user: homeTypes.user,
  navigation: homeTypes.navigation,
};

UserCard.defaultProps = {
  user: {},
  navigation: undefined,
};
export default UserCard;
