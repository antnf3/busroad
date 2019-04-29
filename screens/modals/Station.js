import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import CardBus from "../../components/CardBus";
import { withNavigation } from "react-navigation";

const CommonText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const Container = styled.View`
  flex: 1;
`;

const HeaderView = styled.View`
  width: 100%;
  height: 200;
  background-color: #8d8080;
  align-items: center;
`;
const HeaderNav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50;
  background-color: #8d8080;
`;
const HeaderBtn = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MapBtnView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5;
  margin-right: 10;
  border-width: 0.5;
  border-color: #ececec;
  width: 60;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: transparent;
  height: 100%;
  width: 100%;
  margin-top: 10;
`;

const HeaderBtnView = ({ goMap }) => {
  return (
    <>
      <TouchableOpacity onPressOut={goMap}>
        <MapBtn />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons color="#fff" size={28} name={"ios-star-outline"} />
      </TouchableOpacity>
    </>
  );
};

const MapBtn = () => {
  return (
    <MapBtnView>
      <Ionicons color="#fff" size={28} name={"md-map"} />
      <CommonText fontSize={12} color={"#fff"} marginLeft={5}>
        지도
      </CommonText>
    </MapBtnView>
  );
};

const Header = ({ goBack, goMap }) => {
  return (
    <HeaderView>
      <HeaderNav>
        <TouchableOpacity onPressOut={goBack}>
          <Ionicons
            style={styles.headerBack}
            color="#fff"
            size={44}
            name={"ios-arrow-round-back"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPressOut={goBack}>
          <Ionicons
            style={styles.headerBack}
            color="#fff"
            size={36}
            name={"md-home"}
          />
        </TouchableOpacity>
      </HeaderNav>

      <CommonText fontSize={12} color={"#fff"}>
        10259
      </CommonText>
      <CommonText fontSize={32} color={"#fff"} top={5}>
        KT도봉지점
      </CommonText>
      <CommonText fontSize={16} color={"#fff"} top={5}>
        쌍문역 방면
      </CommonText>

      <HeaderBtn>
        <HeaderBtnView goMap={goMap} />
      </HeaderBtn>
    </HeaderView>
  );
};

const ScrollCardCont = ({ goBusInfo }) => {
  return (
    <>
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
    </>
  );
};

class StationScreen extends React.Component {
  static navigationOptions = {
    title: "정류장 정보"
  };

  render() {
    _goBusInfo = () => this.props.navigation.navigate("BusInfo");
    _goMap = () => this.props.navigation.navigate("MapInfo");
    _goBack = () => this.props.navigation.goBack(null);

    return (
      <Container>
        <Header goBack={_goBack} goMap={_goMap} />
        <ScrollContainer>
          <ScrollCardCont goBusInfo={_goBusInfo} />
        </ScrollContainer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerBack: {
    marginLeft: 16,
    width: 50,
    backgroundColor: "transparent"
  }
});

export default withNavigation(StationScreen);
