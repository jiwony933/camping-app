import styled from "@emotion/styled";
import React from "react";

function MainBoardItems({ title }) {
  return <Box>{title}</Box>;
}

export default MainBoardItems;

const Box = styled.div`
  margin-bottom: 10px;
  height: 60px;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
