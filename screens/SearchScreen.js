import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: yellow;
  align-items: center;
  justify-content: center;
`;

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "버스 검색"
  };

  render() {
    return (
      <Container>
        <Text>search1</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
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
