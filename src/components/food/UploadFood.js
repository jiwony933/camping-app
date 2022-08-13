import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";

function UploadFood() {
  const navigate = useNavigate();

  const onImgInputClick = (event) => {
    event.preventDefualt();
  };

  const handleUpload = () => {
    // TODO: upload 처리
    // 성공하면 /food 로 route

    navigate("/food");
  };

  return (
    <FoodContainer>
      <span>upload food image</span>
      <input type="file" name="file" accept="image/*"></input>
      <div>image</div>
      <span>요리 이름</span>
      <input type="text" />
      <span>간단한 설명</span>
      <input type="text" />
      <button onClick={handleUpload}>upload</button>
    </FoodContainer>
  );
}

export default UploadFood;

const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
