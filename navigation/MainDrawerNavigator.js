import { createDrawerNavigator } from "react-navigation";

//import DrawerHome from "../screens/sidebars/DrawerHome";
import MainTabNavigator from "./MainTabNavigator";
import DrawerLocalArea from "../screens/sidebars/DrawerLocalArea";

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MainTabNavigator
  },
  Notifications: {
    screen: DrawerLocalArea
  }
});

export default MyDrawerNavigator;
