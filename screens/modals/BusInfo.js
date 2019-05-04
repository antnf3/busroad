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
      <TouchableOpacity onPress={goBusDetail}>
        <InfoBtn goBusDetail={goBusDetail} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goMap}>
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

const ScrollCardLeftView = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: ${props => (props.ends ? "flex-start" : "flex-end")};
`;

const BusIconNumView = styled.View`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
const BusIconNum = styled.View`
  width: 60%;
  height: 20;
  background-color: gray;
  opacity: 0.7;
  border: 1px solid gray;
  border-radius: 5;
  align-items: center;
  justify-content: center;
`;

const BusIconView = styled.View`
  position: absolute;
  top: 50%;
  right: -5;
  height: 12;
  width: 16;
  margin-top: -6;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
const BusIconBarView = styled.View`
  width: 6;
  height: ${props => (props.starts || props.ends ? "50%" : "100%")};
  background-color: red;
`;

const ScrollCardLeft = ({ starts, ends, bus }) => {
  return (
    <ScrollCardLeftView ends={ends}>
      {bus ? (
        <BusIconNumView>
          <BusIconNum>
            <Text>6029</Text>
          </BusIconNum>
        </BusIconNumView>
      ) : (
        <></>
      )}

      <BusIconView>
        {bus ? (
          <Ionicons color="green" size={24} name={"ios-bus"} />
        ) : (
          <Ionicons color="#000" size={16} name={"ios-arrow-dropdown"} />
        )}
      </BusIconView>
      <BusIconBarView starts={starts} ends={ends} />
    </ScrollCardLeftView>
  );
};

const ScrollCardRightView = styled.View`
  flex: 3;
  justify-content: center;
  padding-left: 10;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`;
const ScrollCardRight = ({ goStation }) => {
  return (
    <ScrollCardRightView>
      <TouchableOpacity onPress={goStation}>
        <CommonText fontSize={14}>한일병원</CommonText>
        <View style={{ flexDirection: "row" }}>
          <CommonText fontSize={12} color={"#9E9696"}>
            10503
          </CommonText>
          <CommonText fontSize={12} color={"#9E9696"} marginLeft={10}>
            05:30 ~ 23:40
          </CommonText>
        </View>
      </TouchableOpacity>
    </ScrollCardRightView>
  );
};

const ScrollCardContView = styled.View`
  flex-direction: row;
  height: 70;
  width: 100%;
`;

const ScrollCardCont = ({ starts, ends, bus, goStation }) => {
  return (
    <>
      <ScrollCardContView>
        <ScrollCardLeft starts={starts} ends={ends} bus={bus} />
        <ScrollCardRight goStation={goStation} />
      </ScrollCardContView>
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
  _goStation = () => this.props.navigation.navigate("Station");
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
            backgroundColor: "transparent"
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
            <ScrollCardCont starts={true} goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont bus={true} goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont goStation={this._goStation} />
            <ScrollCardCont ends={true} goStation={this._goStation} />
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
