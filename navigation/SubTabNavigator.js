import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import SearchScreen from "../screens/SearchScreen";
import SearchScreen2 from "../screens/SearchScreen2";

const SearchStack = createStackNavigator({
  Search: SearchScreen
});

SearchStack.navigationOptions = {
  tabBarLabel: "버스"
};

const SearchStack2 = createStackNavigator({
  Search2: SearchScreen2
});
SearchStack2.navigationOptions = {
  tabBarLabel: "정류장"
};

export default createMaterialTopTabNavigator(
  {
    SearchStack,
    SearchStack2
  },
  {
    tabBarPosition: "top",
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        color: "black"
      },
      // tabStyle: {
      //   width: 100
      // },
      style: {
        backgroundColor: "pink"
      }
    }
  }
);
