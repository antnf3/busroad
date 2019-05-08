import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Text,
  View,
  Alert
} from "react-native";
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

const HeaderBtnView = ({ goMap, popUp }) => {
  return (
    <>
      <TouchableOpacity onPress={goMap}>
        <MapBtn />
      </TouchableOpacity>
      <TouchableOpacity onPress={popUp}>
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

const Header = ({ goBack, goMap, popUp }) => {
  return (
    <HeaderView>
      <HeaderNav>
        <TouchableOpacity onPress={goBack}>
          <Ionicons
            style={styles.headerBack}
            color="#fff"
            size={44}
            name={"ios-arrow-round-back"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goBack}>
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
        <HeaderBtnView goMap={goMap} popUp={popUp} />
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

  _twoOptionAlertHandler = () => {
    //function to make two option alert
    Alert.alert(
      //title
      "즐겨찾기를 삭제하시겠습니까?",
      //body
      "함께 저장한 버스 즐겨찾기도 삭제됩니다.",
      [
        { text: "취소", onPress: () => console.log("취소 Pressed") },
        {
          text: "확인",
          onPress: () => console.log("확인 Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
    );
  };

  _goBusInfo = () => this.props.navigation.navigate("BusInfo");
  _goMap = () => this.props.navigation.navigate("MapInfo");
  _goBack = () => this.props.navigation.goBack(null);

  render() {
    return (
      <Container>
        <Header
          goBack={this._goBack}
          goMap={this._goMap}
          popUp={this._twoOptionAlertHandler}
        />
        <ScrollContainer>
          <ScrollCardCont goBusInfo={this._goBusInfo} />
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
