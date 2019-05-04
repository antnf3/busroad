import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommonText = styled.Text`
  margin-left: 10;
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
`;

const ButtonBus = ({ goStation }) => {
  return (
    <TouchableOpacity
      onPress={goStation}
      style={{
        flexDirection: "row",
        width: 80,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ECECEC",
        borderRadius: 5,
        opacity: 0.7
      }}
    >
      <Ionicons color="black" size={36} name={"ios-add"} />
      <CommonText fontSize={16}>버스</CommonText>
    </TouchableOpacity>
  );
};
ButtonBus.porpTypes = {
  goStation: PropTypes.func.isRequired
};

export default ButtonBus;
