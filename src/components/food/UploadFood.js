import styled from "@emotion/styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../../atoms/foodListState";

function UploadFood() {
  const [foods, setFoods] = useRecoilState(foodListState);
  const navigate = useNavigate();
  const [foodImage, setFoodImage] = useState();
  const [foodComment, setFoodComment] = useState();

  const imageChange = (e) => {
    setFoodImage(e.target.value);
  };

  const commentChange = (e) => {
    setFoodComment(e.target.value);
  };

  const handleUploadClick = () => {
    const today = new Date();
    setFoods(
      foods.concat({
        id: foods.length,
        comment: foodComment,
        image: foodImage,
        uploadDate:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
      })
    );
    navigate("/food");
  };

  // const handleUpload = () => {
  //   // TODO: upload 처리
  //   // 성공하면 /food 로 route
  //   setFoods(
  //     foods.concat({
  //       id: 6,
  //       comment: "새 음식",
  //       image:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgH9B0WMhDpPo9vcsuWModkzH1GNm6I0HVJFPKBjvNg&s",
  //       uploadDate: "2022-07-24",
  //     })
  //   );

  //   navigate("/food");
  // };

  return (
    <Container>
      <h2>캠핑 요리</h2>
      <Title>사진</Title>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={imageChange}
      ></input>
      <Title>요리 이름</Title>
      <NameInput type="text" onChange={commentChange} />
      {/* <button onClick={handleUpload}>upload</button> */}
      <Button onClick={handleUploadClick}>저장하기</Button>
    </Container>
  );
}

export default UploadFood;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

const NameInput = styled.input`
  width: 80%;
`;

const Button = styled.button`
  all: unset;
  background-color: black;
  color: white;
  width: 200px;
  padding: 10px 0;
  border-radius: 10px;
  text-align: center;
`;
