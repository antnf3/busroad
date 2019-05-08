import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { MapView } from "expo";
import HeaderTitle from "../components/HeaderTitle";

const CommonText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const Container = styled.View`
  flex: 1;
`;
const CardStation = styled.View`
  height: 70;
  width: 100%;
  justify-content: center;
`;
const CardStationBottom = styled.View`
  flex-direction: row;
`;
const CardBottomCnt = ({ goStation }) => {
  return (
    <TouchableOpacity onPress={goStation}>
      <CommonText fontSize={16} color={"#4E4A4A"} marginLeft={10}>
        방학동우성아파트
      </CommonText>
      <CardStationBottom>
        <CommonText fontSize={12} color={"#4E4A4A"} marginLeft={10}>
          10206
        </CommonText>
        <CommonText fontSize={12} color={"#4E4A4A"} marginLeft={5}>
          쌍문동우이빌라방면
        </CommonText>
      </CardStationBottom>
    </TouchableOpacity>
  );
};

const Location = styled.View`
  position: absolute;
  top: 50;
  width: 100%;
  height: 20;
  opacity: 0.5;
  background-color: gray;
  z-index: 99;
  align-items: center;
  justify-content: center;
`;
export default class MyAroundScreen extends React.Component {
  static navigationOptions = {
    title: "내주변"
  };
  _goBack = () => this.props.navigation.goBack(null);
  _goMyAroundList = () => this.props.navigation.navigate("MyAroundList");
  _goStation = () => this.props.navigation.navigate("Station");

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <Container>
        <HeaderTitle
          goBack={this._goBack}
          htitle={"주변 정류장"}
          map={this._goMyAroundList}
        />
        <Location>
          <CommonText fontSize={12} color={"#fff"}>
            서울 도봉구 창2동
          </CommonText>
        </Location>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <CardStation>
          <CardBottomCnt goStation={this._goStation} />
        </CardStation>
      </Container>
    );
  }
}
