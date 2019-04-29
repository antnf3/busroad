import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;
export default class MyAroundScreen extends React.Component {
  static navigationOptions = {
    title: "내주변"
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container>
        <Text>내주변</Text>
        <TouchableOpacity onPressOut={() => this.props.navigation.goBack(null)}>
          <Ionicons
            style={styles.headerBack}
            color="black"
            size={52}
            name={"ios-arrow-round-back"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={() => this.props.navigation.navigate("MyAroundList")}
        >
          <Text>내주변 목록</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerBack: {
    marginLeft: 16,
    width: 50,
    backgroundColor: "transparent"
  }
});
