import React from "react";
import styled from "styled-components";
import HeaderHome from "../components/HeaderHome";
import CardStation from "../components/CardStation";
import CardBus from "../components/CardBus";

const Container = styled.View`
  flex: 1;
  background-color: #ececec;
  align-items: center;
`;

const CommonText = styled.Text`
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
`;

const AroundView = styled.View`
  width: 96%;
  height: 80;
  border-radius: 5;
  background-color: #fff;
  margin-top: 10;
  elevation: 5;
  justify-content: center;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: transparent;
  height: 100%;
  width: 100%;
  margin-top: 10;
`;

const AroundCont = ({ around }) => {
  return (
    <AroundView>
      <CommonText fontSize={20} color={"#0A0A0A"} marginLeft={10}>
        주변 정류장
      </CommonText>
      <CommonText fontSize={12} color={"#8D8080"} marginLeft={10}>
        {around}
      </CommonText>
    </AroundView>
  );
};

const ScrollCardCont = ({ goStation, goBusInfo }) => {
  return (
    <>
      <CardStation isTop={false} goStation={goStation} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardStation isTop={true} goStation={goStation} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
    </>
  );
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "즐겨찾기"
  };

  _toggleDrawer = () => this.props.navigation.toggleDrawer();
  _goSearch = () => this.props.navigation.navigate("Search");
  _goBusInfo = () => this.props.navigation.navigate("BusInfo");
  _goMap = () => this.props.navigation.navigate("MapInfo");
  _goStation = () => this.props.navigation.navigate("Station");

  render() {
    return (
      <Container>
        <HeaderHome
          toggleDrawer={this._toggleDrawer}
          goSearch={this._goSearch}
        />

        <AroundCont around={"초당초등학교 146m"} />

        <ScrollContainer>
          <ScrollCardCont
            goStation={this._goStation}
            goBusInfo={this._goBusInfo}
          />
        </ScrollContainer>
      </Container>
    );
  }
}
