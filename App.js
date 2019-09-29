import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from 'app/router';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import store from 'app/store';

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
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
