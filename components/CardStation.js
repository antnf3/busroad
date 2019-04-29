import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import ButtonBus from "./ButtonBus";
import PropTypes from "prop-types";

const CommonText = styled.Text`
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
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

const CardStation = ({ isTop, goStation }) => {
  return (
    <TouchableOpacity onPressOut={goStation}>
      <ScrollCard isTop={isTop}>
        <ScrollDivLeft>
          <CommonText fontSize={20} color={"#0A0A0A"} marginLeft={10}>
            초당초등학교
          </CommonText>
          <CommonText fontSize={12} color={"#8D8080"} marginLeft={10}>
            방학동우성아파트 방면
          </CommonText>
        </ScrollDivLeft>
        <ScrollDivRight>
          <ButtonBus goStation={goStation} />
        </ScrollDivRight>
      </ScrollCard>
    </TouchableOpacity>
  );
};

CardStation.propTypes = {
  isTop: PropTypes.bool.isRequired,
  goStation: PropTypes.func.isRequired
};
export default CardStation;
