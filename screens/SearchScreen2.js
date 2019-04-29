import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

export default class SearchScreen2 extends React.Component {
  static navigationOptions = {
    header: null,
    title: "정류장 검색"
  };

  render() {
    return (
      <Container>
        <Text>Search2</Text>
        <TouchableOpacity onPressOut={() => this.props.navigation.goBack(null)}>
          <Ionicons
            style={styles.headerBack}
            color="black"
            size={52}
            name={"ios-arrow-round-back"}
          />
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
