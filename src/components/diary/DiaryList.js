import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { diaryListDummy } from "./diary.dummy";
import DiaryDetail from "./DiaryDetail";
import { Link } from "react-router-dom";

function DiaryList() {
  const [selected, setSelected] = useState();
  const handleDiaryClick = (id) => {
    setSelected(diaryListDummy.find((el) => el.id == id));
  };

  return (
    <DiaryContainer>
      <Title>나의 캠핑 기록</Title>
      <DiaryItemBoard>
        <Link to="/diary/upload">
          <UploadButton> ✏️ 일기 쓰기</UploadButton>
        </Link>
        {diaryListDummy.map((item) => (
          <DiaryItem onClick={() => handleDiaryClick(item.id)}>
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

      {selected && (
        <DiaryDetail selected={selected} setSelected={setSelected} />
      )}
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
  width: 90vw;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
  height: 80px;
  width: 90vw;
  background-color: #e2f1fc;
  border-radius: 20px;
  margin-bottom: 10px;
  border: none;
  text-align: center;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
