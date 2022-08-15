import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

function UploadDiary() {
  const weatherIndex = ["선택", "----", "맑음", "흐림", "비", "눈", "태풍"];
  const [title, setTitle] = useState("");
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [context, setContext] = useState("");
  const onContextChange = (e) => {
    setContext(e.target.value);
  };
  const [weather, setWeather] = useState();
  const onWeatherChange = (e) => {
    setWeather(e.target.value);
  };
  const [image, setImage] = useState("");
  const onImageChange = (e) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = function (e) {
      console.log(e.target.result);
      setImage(e.target.result);
    };

    if (files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  console.log(image);

  const onSubmit = () => {};
  return (
    <UploadContainer>
      <h2>캠핑 일기 쓰기</h2>
      <span>다녀온 날짜</span>
      <input type="date" />
      <span>그날 날씨</span>
      <select value={weather} onChange={onWeatherChange}>
        {weatherIndex.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <span>일기 제목</span>
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="한줄 요약"
      />
      <span>기록</span>
      <textarea
        rows="5"
        value={context}
        onChange={onContextChange}
        placeholder="어떤 일이 있었고,              어떤 생각을 했나요?"
      ></textarea>
      <span>사진</span>
      <input
        type="file"
        // value={image}
        onChange={onImageChange}
        accept="image/*"
      />
      {image && <img src={image} />}
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

  span {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  input {
    width: 90%;
    height: 25px;
    font-size: 16px;
  }

  textarea {
    width: 90%;
    font-size: 16px;
    line-height: 140%;
  }

  select {
    width: 90%;
    height: 25px;
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
