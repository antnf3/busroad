import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SubTabNavigator from "./SubTabNavigator";
import MyAroundScreen from "../screens/MyAroundScreen";
import StationScreen from "../screens/modals/Station";
import StationDetailScreen from "../screens/modals/StationDetail";
import BusInfoScreen from "../screens/modals/BusInfo";
import MyAroundListScreen from "../screens/modals/MyAroundList";
import MapInfoScreen from "../screens/modals/MapInfo";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Station: {
      screen: StationScreen
    },
    StationDetail: {
      screen: StationDetailScreen
    },
    BusInfo: {
      screen: BusInfoScreen
    },
    MapInfo: {
      screen: MapInfoScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "즐겨찾기",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const SearchStack = createStackNavigator({
  Search: SubTabNavigator
});

SearchStack.navigationOptions = {
  tabBarLabel: "검색",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const MyAroundStack = createStackNavigator(
  {
    MyAround: MyAroundScreen,
    MyAroundList: {
      screen: MyAroundListScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

MyAroundStack.navigationOptions = {
  tabBarLabel: "내 주변",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createMaterialTopTabNavigator(
  {
    HomeStack,
    SearchStack,
    MyAroundStack
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      labelStyle: {
        fontSize: 16,
        color: "blue"
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
