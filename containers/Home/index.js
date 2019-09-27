import React from 'react';
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
  Text,
  Card,
  CardItem,
} from 'native-base';

export default class App extends React.Component {
  componentDidMount = () => {};

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Github App</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Check some awesome Github accounts</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

App.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
