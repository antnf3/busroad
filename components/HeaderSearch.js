import React from "react";
import { TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50;
  background-color: #fff;
  elevation: 7;
`;

const HeaderText = styled.TextInput`
  height: 40;
  width: 250;
  border-radius: 5;
  background: #ececec;
  color: #bcacac;
  text-align: left;
  text-align-vertical: center;
  letter-spacing: 2;
  padding-left: 5;
  elevation: 5;
`;

const HTitle = styled.Text`
  font-size: 24;
  color: #4e4a4a;
`;
const HeaderTmp = styled.View`
  background-color: transparent;
  width: 50;
  height: 50;
`;

const HeaderSearch = ({ goHome, htitle }) => {
  return (
    <Header>
      <TouchableOpacity onPress={goHome}>
        <Ionicons
          style={styles.headerBack}
          color="black"
          size={52}
          name={"ios-arrow-round-back"}
        />
      </TouchableOpacity>
      <HeaderText placeholder={htitle} />
      <HeaderTmp />
    </Header>
  );
};

const styles = StyleSheet.create({
  headerBack: {
    marginLeft: 16,
    width: 50,
    backgroundColor: "transparent"
  }
});

export default HeaderSearch;
