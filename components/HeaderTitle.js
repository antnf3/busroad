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

const HTitle = styled.Text`
  font-size: 24;
  color: #4e4a4a;
`;
const HeaderTmp = styled.View`
  background-color: transparent;
  width: 50;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = ({ goBack, htitle, map }) => {
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
      {map ? (
        <HeaderTmp>
          <TouchableOpacity onPress={map}>
            <Ionicons
              style={styles.headerBack}
              color="gray"
              size={32}
              name={"ios-list"}
            />
          </TouchableOpacity>
        </HeaderTmp>
      ) : (
        <HeaderTmp />
      )}
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
