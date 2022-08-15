import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { diaryListDummy } from "./diary.dummy";
import DiaryDetail from "./DiaryDetail";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../../atoms/loginState";
import { isFocusable } from "@testing-library/user-event/dist/utils";
import { diaryListState } from "atoms/diaryListState";

function DiaryList() {
  const [selected, setSelected] = useState();
  const [diarys, setDiarys] = useRecoilState(diaryListState);
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
              <Text>{item.campingDate}</Text>
              <Text>{item.title}</Text>
              <SmallText>{item.comment}</SmallText>
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
  margin: 10px;
`;
const SmallText = styled.div`
  font-size: 15px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
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
