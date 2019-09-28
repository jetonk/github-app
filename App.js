import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigator from 'app/router';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { ApolloProvider } from 'react-apollo';
import client from 'app/api/apollo';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return <View />;
    }
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
