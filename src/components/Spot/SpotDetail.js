import React from "react";
import styled from "@emotion/styled";
import { NaverMap } from "react-naver-maps";

function SpotDetail({ selected, setSelected }) {
  return (
    <>
      <Overlay />
      <CloseButton onClick={() => setSelected()}>X</CloseButton>
      <Content>
        <Title>{selected.facltNm}</Title>
        <img src={selected.firstImageUrl} alt="이미지를 준비중입니다" />
        <Text>주소 : {selected.addr1}</Text>
        <Text>전화번호 : {selected.tel}</Text>
        <hr />
        <Text>
          전체 사이트 수 :{" "}
          {Number(selected.gnrlSiteCo) +
            Number(selected.autoSiteCo) +
            Number(selected.glampSiteCo) +
            Number(selected.caravSiteCo) +
            Number(selected.indvdlCaravSiteCo)}
        </Text>
        <Text>반려 동물 출입 : {selected.animalCmgCl}</Text>
        {/* <NaverMap defaultCenter={{ lat: selected.mapX, lng: selected.mapY }} /> */}
      </Content>
    </>
  );
}

export default SpotDetail;

const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const CloseButton = styled.button`
  z-index: 1005;
  position: fixed;
  right: 6%;
  top: 5.5%;
  background-color: gray;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Content = styled.div`
  z-index: 1001;
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  overflow: scroll;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  img {
    width: 100%;
    margin-bottom: 20px;
    height: 40%;
    object-fit: cover;
  }
`;
const Title = styled.h3`
  text-align: center;
`;

const Text = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
`;
