import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from 'app/containers/Home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});
export default createAppContainer(AppNavigator);
