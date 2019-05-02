import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from "styled-components";
import HeaderTitle from "../../components/HeaderTitle";

const Container = styled.View`
  flex: 1;
  background-color: #e6e6e6;
`;
const TmpSpace = styled.View`
  height: 20;
  width: 100%;
  background-color: transparent;
`;

const Content = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`;
const Info = styled.View`
  width: 100%;
  height: 100;
  margin-top: 1;
  padding-left: 10;
  justify-content: center;
  background-color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth};
`;
class BusDetailScreen extends React.Component {
  static navigationOptions = {
    title: "버스 상세정보"
  };
  _goBack = () => this.props.navigation.goBack(null);
  render() {
    return (
      <Container>
        <HeaderTitle goBack={this._goBack} htitle={"도봉6"} />
        <TmpSpace />
        <Content>
          <Info>
            <Text>운행지역</Text>
            <Text>{`한일병원 <-> 방학3동 주민센터`}</Text>
            <Text>서울 마을버스</Text>
          </Info>
          <Info>
            <Text>운행시간</Text>
            <Text>평일 04:30~23:00, 토요일 04:30 ~ 23:00</Text>
          </Info>
          <Info>
            <Text>배차간격</Text>
            <Text>평일 8분, 토요일 9분, 공유일 11분</Text>
          </Info>
          <Info>
            <Text>주요경유지</Text>
            <Text>
              삼화상운 - 장위1동새마을금고-장위1동주민센터-................
            </Text>
          </Info>
        </Content>
      </Container>
    );
  }
}

export default BusDetailScreen;
