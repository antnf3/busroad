import React, { Component } from "react";
import { Button } from "react-native";

class DrawerHome extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.toggleDrawer()}
        title="Go to notifications"
      />
    );
  }
}

export default DrawerHome;
