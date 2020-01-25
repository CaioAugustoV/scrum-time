import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import ScreenHome from '../pages/home';

const defaultStack = createSwitchNavigator(
  {
    Home: {
      screen: ScreenHome,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const Routes = createAppContainer(defaultStack);

export default Routes;