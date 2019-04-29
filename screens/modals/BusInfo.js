import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

export default class BusInfoScreen extends React.Component {
  static navigationOptions = {
    title: "Main Tab 2"
  };

  render() {
    return (
      <Container>
        <Text>버스 상세정보</Text>
        <TouchableOpacity onPressOut={() => this.props.navigation.goBack(null)}>
          <Ionicons
            style={styles.headerBack}
            color="black"
            size={52}
            name={"ios-arrow-round-back"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={() => this.props.navigation.navigate("MapInfo")}
        >
          <Text>지도 정보로 이동</Text>
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
