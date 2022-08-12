import styled from "@emotion/styled";
import React from "react";
import { Navigate } from "react-router-dom";

function UploadDiary() {
  const weather = ["맑음", "흐림", "비", "눈", "태풍"];
  const onSubmit = () => {};
  return (
    <UploadContainer>
      <h3>캠핑 일기 쓰기</h3>
      <span>날짜</span>
      <input type="date" />
      <span>날씨</span>
      <select>
        {weather.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <span>제목</span>
      <input type="text" placeholder="한줄 요약" />
      <span>기록</span>
      <textarea rows="10"></textarea>
      <span>사진</span>
      <input type="file" accept="image/*" />
      <ButtonArea>
        <SaveButton>임시 저장</SaveButton>
        <UploadButton onSubmit={onSubmit}>저장하기</UploadButton>
      </ButtonArea>
    </UploadContainer>
  );
}

export default UploadDiary;

const UploadContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const SaveButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: lightgrey;
  color: white;
  margin: 20px;

  :active {
    background-color: white;
    color: lightgray;
  }
`;

const UploadButton = styled.button`
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: black;
  color: white;
  margin: 20px;

  :active {
    background-color: white;
    color: black;
  }
`;
