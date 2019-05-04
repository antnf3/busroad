import React, { Component } from "react";
import styled from "styled-components";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HeaderTitle from "../../components/HeaderTitle";
const Locale = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LocaleText = styled.Text`
  font-size: ${props => props.fontSize};
  color: ${props => (props.onOff ? "#000" : props.color)};
`;
const LocaleTextMarginRight = styled(LocaleText)`
  margin-right: 10;
`;

const LocaleTextMarginLeft = styled(LocaleText)`
  margin-left: 10;
`;

const Container = styled.View`
  flex: 1;
  background-color: #e6e6e6;
`;

const Title = styled.View`
  position: absolute;
  top: 65;
  left: 0;
  right: 0;
  height: 90;
  background: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TitleLeft = styled.View`
  margin-left: 10;
`;
const TitleRight = styled.View`
  margin-right: 10;
`;

const ScrollList = styled.ScrollView`
  position: absolute;
  top: 175;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`;
const LocalCard = () => {
  return (
    <Locale>
      <LocaleText fontSize={16} color={"#4E4A4A"}>
        지역설정
      </LocaleText>
      <LocaleTextMarginRight fontSize={14} color={"#8D8080"}>
        서울
      </LocaleTextMarginRight>
    </Locale>
  );
};

const ScrollCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`;

class DrawerLocalArea extends Component {
  static navigationOptions = {
    drawerLabel: <LocalCard />,
    drawerIcon: () => <Ionicons color="black" size={20} name={"ios-locate"} />
  };

  state = {
    onOff: false,
    checked: ""
  };

  _ScrollCardList = () => {
    const Locale = ["서울", "대전", "대구", "부산", "광주", "충주", "완도"];
    const { checked } = this.state;
    return Locale.map((local, key) => (
      <ScrollCard key={key}>
        <LocaleTextMarginLeft fontSize={20} color={"#8D8080"}>
          {local}
        </LocaleTextMarginLeft>
        <TouchableOpacity
          onPressOut={() => this.setState({ checked: local })}
          style={{
            marginRight: 10,
            width: 30,
            height: 30
          }}
        >
          <FontAwesome
            color={checked === local ? "red" : "gray"}
            size={20}
            name={"check-square"}
          />
        </TouchableOpacity>
      </ScrollCard>
    ));
  };

  _goBack = () => this.props.navigation.goBack(null);

  render() {
    const { onOff } = this.state;
    return (
      <Container>
        <HeaderTitle goBack={this._goBack} htitle={"지역설정"} />
        <Title>
          <TitleLeft>
            <LocaleText fontSize={24} color={"#8D8080"} onOff={onOff}>
              검색지역 자동설정
            </LocaleText>
            <LocaleText fontSize={16} color={"#8D8080"}>
              {onOff ? "서울 중심으로 검색중" : "꺼짐"}
            </LocaleText>
          </TitleLeft>
          <TitleRight>
            <TouchableOpacity onPress={() => this.setState({ onOff: !onOff })}>
              <FontAwesome
                color="black"
                size={40}
                name={onOff ? "toggle-on" : "toggle-off"}
              />
            </TouchableOpacity>
          </TitleRight>
        </Title>
        {onOff ? <></> : <ScrollList>{this._ScrollCardList()}</ScrollList>}
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

export default DrawerLocalArea;
