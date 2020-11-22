import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings177308Navigator from '../features/Settings177308/navigator';
import UserProfile177301Navigator from '../features/UserProfile177301/navigator';
import Settings177300Navigator from '../features/Settings177300/navigator';
import Settings177298Navigator from '../features/Settings177298/navigator';
import SignIn2177296Navigator from '../features/SignIn2177296/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings177308: { screen: Settings177308Navigator },
UserProfile177301: { screen: UserProfile177301Navigator },
Settings177300: { screen: Settings177300Navigator },
Settings177298: { screen: Settings177298Navigator },
SignIn2177296: { screen: SignIn2177296Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
