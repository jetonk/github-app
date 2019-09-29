import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from 'app/containers/Home';
import Profile from 'app/containers/Profile';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});
export default createAppContainer(AppNavigator);
