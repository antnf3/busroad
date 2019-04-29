import React from "react";
import { TouchableOpacity, StyleSheet, Animated, View } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import CardBus from "../../components/CardBus";
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
  background-color: #4ce347;
  align-items: center;
`;
const HeaderNav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50;
  background-color: #4ce347;
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

const HeaderBtnView = ({ goMap, goBusDetail }) => {
  return (
    <>
      <TouchableOpacity onPressOut={goBusDetail}>
        <InfoBtn />
      </TouchableOpacity>
      <TouchableOpacity onPressOut={goMap}>
        <MapBtn />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons color="#fff" size={28} name={"ios-star-outline"} />
      </TouchableOpacity>
    </>
  );
};

const InfoBtn = () => {
  return (
    <MapBtnView>
      <Ionicons color="#fff" size={28} name={"ios-information-circle"} />
      <CommonText fontSize={12} color={"#fff"} marginLeft={5}>
        정보
      </CommonText>
    </MapBtnView>
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

const Header = ({ goBack, goMap, goBusDetail }) => {
  return (
    <Animated.View style={styles.AniHeaderView}>
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
        서울마을버스
      </CommonText>
      <CommonText fontSize={32} color={"#fff"} top={5}>
        도봉06
      </CommonText>
      <CommonText fontSize={16} color={"#fff"} top={5}>
        {`한일병원 <-> 한일병원`}
      </CommonText>

      <HeaderBtn>
        <HeaderBtnView goMap={goMap} goBusDetail={goBusDetail} />
      </HeaderBtn>
    </Animated.View>
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
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
    </>
  );
};

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class BusInfoScreen extends React.Component {
  static navigationOptions = {
    title: "정류장 정보"
  };

  state = {
    scrollY: new Animated.Value(0)
  };

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    _goBusDetail = () => this.props.navigation.navigate("BusDetail");
    _goMap = () => this.props.navigation.navigate("MapInfo");
    _goBack = () => this.props.navigation.goBack(null);
    _goBusInfo = () => this.props.navigation.navigate("BusInfo");
    return (
      <Container>
        <Header
          goBack={_goBack}
          goMap={_goMap}
          goBusDetail={_goBusDetail}
          style={{ height: headerHeight }}
        />
        <ScrollContainer
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
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
  },
  AniHeaderView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#4ce347",
    alignItems: "center"
  }
});

export default withNavigation(BusInfoScreen);
