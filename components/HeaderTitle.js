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
  opacity: 0.6;
  border-bottom-width: ${StyleSheet.hairlineWidth};
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

const HeaderTitle = ({ goBack, htitle }) => {
  return (
    <Header>
      <TouchableOpacity onPress={goBack}>
        <Ionicons
          style={styles.headerBack}
          color="black"
          size={52}
          name={"ios-arrow-round-back"}
        />
      </TouchableOpacity>
      <HTitle>{htitle}</HTitle>
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

export default HeaderTitle;
