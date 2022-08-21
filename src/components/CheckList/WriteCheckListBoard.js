import styled from "@emotion/styled";
import React from "react";
import CheckListBox from "./WriteCheckListBox";

function CheckListBoard({ qwe }) {
  return (
    <div>
      {qwe.map((item) => (
        <CheckListBox asd={item} />
      ))}
    </div>
  );
}

export default CheckListBoard;
