import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { diaryListDummy } from "./diary.dummy";
import DiaryDetail from "./DiaryDetail";
import { Link } from "react-router-dom";

function DiaryList() {
  const [selected, setSelected] = useState();
  const handleDiaryClick = () => {
    setSelected();
  };
  const handleDiaryUpload = () => {};
  return (
    <DiaryContainer>
      <Title>나의 캠핑 기록</Title>
      <Link to="/diary/upload">
        <UploadButton onClick={handleDiaryUpload}>일기 쓰기</UploadButton>
      </Link>
      <DiaryItemBoard onClick={handleDiaryClick}>
        {diaryListDummy.map((item) => (
          <DiaryItem>
            <DiaryImg>
              <img src={item.image} />
            </DiaryImg>
            <DiaryText>
              <span>{item.campingDate}</span>
              <b>{item.title}</b>
              <span>{item.comment}</span>
              <span>날씨 : {item.weather}</span>
            </DiaryText>
          </DiaryItem>
        ))}
      </DiaryItemBoard>
      <DiaryDetail />
    </DiaryContainer>
  );
}

export default DiaryList;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
`;

const Title = styled.h2``;

const DiaryItemBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiaryItem = styled.div`
  height: 130px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: beige;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const DiaryImg = styled.div`
  width: 160px;
  margin: 10px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const DiaryText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 8px;

  span {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
const UploadButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  height: 30px;

  :active {
    background-color: white;
    color: black;
  }
`;
