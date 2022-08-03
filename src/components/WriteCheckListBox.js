import styled from "@emotion/styled";
import React from "react";

function CheckListBox(props) {
  return (
    <Box>
      {props.item}
      <button>delete</button>
    </Box>
  );
}

export default CheckListBox;

const Box = styled.div`
  margin-bottom: 10px;
  height: 30px;
`;
