import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
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
const HeaderText = styled.Text`
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

const HeaderTmp = styled.View`
  background-color: transparent;
  width: 50;
  height: 50;
`;

const HeaderHome = ({ toggleDrawer, goSearch }) => {
  return (
    <Header>
      <TouchableOpacity onPressOut={toggleDrawer}>
        <Ionicons
          style={styles.headerBack}
          color="black"
          size={44}
          name={"ios-menu"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPressOut={goSearch}>
        <HeaderText>버스 또는 정류장 검색</HeaderText>
      </TouchableOpacity>
      <HeaderTmp />
    </Header>
  );
};

HeaderHome.porpTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  goSearch: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  headerBack: {
    marginLeft: 16,
    width: 50,
    backgroundColor: "transparent"
  }
});
export default HeaderHome;
