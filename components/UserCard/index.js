import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Left, Thumbnail, Text } from 'native-base';
import { mainTypes } from 'app/types';

const UserCard = ({ user, error, showUser }) => {
  if (Object.keys(user).length && !error.status) {
    return (
      <Card>
        <TouchableOpacity onPress={() => showUser(user)}>
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
};

UserCard.defaultProps = {
  user: {},
  error: {},
};
export default UserCard;
