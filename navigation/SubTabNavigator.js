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
  tabBarLabel: "버스",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: "#F50A0A",
    inactiveTintColor: "#AFACAC",
    pressColor: "gray",
    style: {
      backgroundColor: "#fff"
    },
    labelStyle: {
      fontSize: 18
    }
  }
};

const SearchStack2 = createStackNavigator({
  Search2: SearchScreen2
});
SearchStack2.navigationOptions = {
  tabBarLabel: "정류장",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: "#F50A0A",
    inactiveTintColor: "#AFACAC",
    pressColor: "gray",
    style: {
      backgroundColor: "#fff"
    },
    labelStyle: {
      fontSize: 18
    }
  }
};

export default createMaterialTopTabNavigator(
  {
    SearchStack,
    SearchStack2
  },
  {
    // tabBarComponent: () => null,
    tabBarPosition: "top"
  }
);
