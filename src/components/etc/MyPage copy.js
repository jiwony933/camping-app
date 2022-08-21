import styled from "@emotion/styled";
import React, { useState } from "react";
import MyPageConverter from "./MyPageConverter";

function MyPage() {
  const [index, setIndex] = useState("x");
  const handleIndex = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <select onChange={handleIndex}>
        <option value="x">Select Converter</option>
        <option value="0">Hours</option>
        <option value="1">Kilos</option>
      </select>
      {index == "0" ? <MyPageConverter /> : null}
      {index == "1" ? <MyKiloConverter /> : null}
    </div>
  );
}

export default MyPage;

const MyKiloConverter = styled.div`
  height: 100px;
  width: 100px;
  background-color: beige;
`;
