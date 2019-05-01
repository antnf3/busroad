import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Animated,
  View,
  Platform,
  RefreshControl,
  Text
} from "react-native";
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
  height: 150;
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
  z-index: 999;
`;
const HeaderBtn = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const ScrollContainer = styled.View`
  background-color: transparent;
  padding-top: 150;
`;

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const HeaderNavView = ({ goBack }) => {
  return (
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

const HeaderBtnView = ({ goMap, goBusDetail }) => {
  return (
    <>
      <TouchableOpacity onPressOut={goBusDetail}>
        <InfoBtn goBusDetail={goBusDetail} />
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
const Header = ({ goMap, goBusDetail }) => {
  return (
    <HeaderView>
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
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
      <CardBus goBusInfo={goBusInfo} />
    </>
  );
};

class BusInfoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false
    };
  }

  static navigationOptions = {
    title: "정류장 정보"
  };

  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0.6, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp"
    });

    _goBusDetail = () => this.props.navigation.navigate("BusDetail");
    _goMap = () => this.props.navigation.navigate("MapInfo");
    _goBack = () => this.props.navigation.goBack(null);
    _goBusInfo = () => this.props.navigation.navigate("BusInfo");
    return (
      <Container>
        <HeaderNavView goBack={_goBack} />
        <Animated.ScrollView
          style={{
            flex: 1,
            backgroundColor: "transparent",
            height: "100%",
            width: "100%"
          }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT
          }}
        >
          <ScrollContainer>
            <ScrollCardCont goBusInfo={_goBusInfo} />
          </ScrollContainer>
        </Animated.ScrollView>

        <Animated.ScrollView
          pointerEvents="none"
          style={[
            styles.header,
            {
              opacity: imageOpacity,
              transform: [{ translateY: headerTranslate }]
            }
          ]}
        >
          <Header goMap={_goMap} goBusDetail={_goBusDetail} />
        </Animated.ScrollView>
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
  header: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: "#03A9F4",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  }
});

export default withNavigation(BusInfoScreen);
