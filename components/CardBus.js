import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const CommonText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const ScrollCard = styled.View`
  flex-direction: row;
  width: 100%;
  height: 80;
  elevation: 2;
  background-color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  margin-top: ${props => (props.isTop ? 10 : 0)};
`;

const ScrollDivLeft = styled.View`
  flex: 1;
  justify-content: center;
`;
const ScrollDivRight = styled.View`
  flex-direction: row;
  width: ${props => (props.width ? props.width : 100)};
  height: 100%;
  align-items: center;
`;
const BusTimeView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: ${props => props.flag};
  justify-content: center;
`;

const ScrollCardBusTime = ({ flag }) => {
  return (
    <BusTimeView flag={flag}>
      <CommonText fontSize={16}>2분 2초</CommonText>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ECECEC",
          borderRadius: 5,
          opacity: 0.7,
          marginLeft: 5
        }}
      >
        <CommonText fontSize={12}>3번째전</CommonText>
      </View>
    </BusTimeView>
  );
};

const CardBus = ({ goBusInfo }) => {
  return (
    <TouchableOpacity onPress={goBusInfo}>
      <ScrollCard>
        <ScrollDivLeft>
          <CommonText fontSize={12} color={"#5090EF"} marginLeft={10}>
            [마을버스]
          </CommonText>
          <CommonText fontSize={28} color={"#5090EF"} marginLeft={10}>
            도봉05
          </CommonText>
        </ScrollDivLeft>

        <ScrollDivLeft>
          <ScrollCardBusTime flag={"flex-end"} />
          <ScrollCardBusTime flag={"flex-start"} />
        </ScrollDivLeft>

        <ScrollDivRight width={50}>
          <TouchableOpacity style={{ width: 40, height: 40 }}>
            <Ionicons color="black" size={32} name={"ios-star-outline"} />
          </TouchableOpacity>
        </ScrollDivRight>
      </ScrollCard>
    </TouchableOpacity>
  );
};

CardBus.propTypes = {
  goBusInfo: PropTypes.func.isRequired
};
export default CardBus;
