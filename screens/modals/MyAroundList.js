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
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const CommonText = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : 16)};
  color: ${props => (props.color ? props.color : "#000")};
  margin-top: ${props => (props.top ? props.top : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const Container = styled.View`
  flex: 1;
  background-color: #e6e6e6;
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

const HeaderBottom = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Header = () => {
  return (
    <HeaderView>
      <CommonText fontSize={28} color={"#fff"}>
        주변 정류장
      </CommonText>
      <HeaderBottom>
        <FontAwesome color="#fff" size={12} name={"location-arrow"} />
        <CommonText fontSize={12} color={"#fff"} marginLeft={5}>
          도봉구 방학3동
        </CommonText>
      </HeaderBottom>
    </HeaderView>
  );
};

const ScrollCard = styled.ScrollView`
  height: 100%;
  padding-top: 150;
  background-color: #e6e6e6;
`;
const Card = styled.View`
  height: 70;
  width: 100%;
  elevation: 7;
  flex-direction: row;
  background-color: #fff;
  margin-top: 10;
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

const CardLeftBottom = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CardList = ({ goStation }) => {
  return (
    <Card>
      <CardLeftSty>
        <TouchableOpacity onPress={goStation}>
          <CommonText fontSize={18} color={"#5090EF"} marginLeft={10}>
            KT도봉지점
          </CommonText>
          <CardLeftBottom>
            <CommonText fontSize={12} color={"#F11D1D"} marginLeft={10}>
              10259
            </CommonText>
            <CommonText fontSize={16} color={"#5090EF"} marginLeft={10}>
              쌍문역방면
            </CommonText>
          </CardLeftBottom>
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

class MyAroundList extends React.Component {
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
          <ScrollCard>
            <CardList goStation={this._goStation} />
            <CardList goStation={this._goStation} />
            <CardList goStation={this._goStation} />
            <CardList goStation={this._goStation} />
            <CardList goStation={this._goStation} />
          </ScrollCard>
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
          <Header />
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

export default MyAroundList;
