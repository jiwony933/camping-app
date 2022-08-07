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
    <div>
      upload food
      <input type="file" name="file" accept="image/*"></input>
      <div>image</div>
      <h1>코멘트</h1>
      <input type="text" />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
}

export default UploadFood;
