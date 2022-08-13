import React from "react";
import styled from "@emotion/styled";

function SpotDetail({ selected, setSelected }) {
  return (
    <>
      <Overlay />
      <CloseButton onClick={() => setSelected()}>X</CloseButton>
      <Content>
        <h3>{selected.facltNm}</h3>
        <img src={selected.firstImageUrl} alt="이미지를 준비중입니다" />
        <Text>주소 : {selected.addr1}</Text>
        <Text>전화번호 : {selected.tel}</Text>
        <Text>
          전체 사이트 수 :{" "}
          {Number(selected.gnrlSiteCo) +
            Number(selected.autoSiteCo) +
            Number(selected.glampSiteCo) +
            Number(selected.caravSiteCo) +
            Number(selected.indvdlCaravSiteCo)}
        </Text>
        <Text>반려 동물 출입 : {selected.animalCmgCl}</Text>
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
  right: 10%;
  top: 10%;
  background-color: pink;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Content = styled.div`
  z-index: 1001;
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  img {
    width: 80%;
    margin-bottom: 20px;
    border-radius: 20px;
  }
`;

const Text = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;
