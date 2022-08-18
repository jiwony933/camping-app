import styled from "@emotion/styled";
import React from "react";
import CheckListBox from "./WriteCheckListBox";

function CheckListBoard(props) {
  return (
    <div>
      {props.items.map((item) => (
        <CheckListBox item={item} />
      ))}
    </div>
  );
}

export default CheckListBoard;
