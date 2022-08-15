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
        id: 10,
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
    <FoodContainer>
      <h2>캠핑 요리</h2>
      <span>사진</span>
      <input
        type="file"
        name="file"
        accept="image/*"
        onChange={imageChange}
      ></input>
      <span>comment</span>
      <input type="text" onChange={commentChange} />
      {/* <button onClick={handleUpload}>upload</button> */}
      <button onClick={handleUploadClick}>저장하기</button>
    </FoodContainer>
  );
}

export default UploadFood;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
