import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import HeaderSearch from "../components/HeaderSearch";

const CommonText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const Container = styled.View`
  flex: 1;
  background-color: #ececec;
`;
const TmpArea = styled.View`
  width: 100%;
  height: 10;
  background-color: transparent;
`;
const ScrollCard = styled.ScrollView`
  flex: 1;
`;
const Card = styled.View`
  height: 70;
  width: 100%;
  elevation: 7;
  flex-direction: row;
  background-color: #fff;
  margin-top: 1;
`;

const CardLeftSty = styled.View`
  flex: 1;
  justify-content: center;
`;
const CardRightSty = styled.View`
  width: 50;
  align-items: center;
  justify-content: center;
`;

const CardList = ({ goBusInfo }) => {
  return (
    <Card>
      <CardLeftSty>
        <TouchableOpacity onPress={goBusInfo}>
          <CommonText fontSize={18} color={"#5090EF"} marginLeft={10}>
            700
          </CommonText>
          <CommonText fontSize={18} color={"#AFACAC"} marginLeft={10}>
            간선버스
          </CommonText>
        </TouchableOpacity>
      </CardLeftSty>

      <CardRightSty>
        <TouchableOpacity style={{ width: 40, height: 40 }}>
          <Ionicons color="black" size={32} name={"ios-star-outline"} />
        </TouchableOpacity>
      </CardRightSty>
    </Card>
  );
};
export default class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "버스 검색"
  };

  _goHome = () => this.props.navigation.navigate("Home");
  _goBusInfo = () => this.props.navigation.navigate("BusInfo");

  render() {
    return (
      <Container>
        <HeaderSearch goHome={this._goHome} htitle={"버스 검색"} />
        <TmpArea />
        <ScrollCard>
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
          <CardList goBusInfo={this._goBusInfo} />
        </ScrollCard>
      </Container>
    );
  }
}
