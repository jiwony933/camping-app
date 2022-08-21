import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CheckListBoard from "./WriteCheckListBoard";

function WriteCheckList() {
  const [toolItem, setToolItem] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [toolItems, setToolItems] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const onToolChange = (e) => {
    setToolItem(e.target.value);
  };
  const onFoodChange = (e) => {
    setFoodItem(e.target.value);
  };
  const onToolSubmit = (e) => {
    e.preventDefault();
    setToolItems((cur) => [toolItem, ...cur]);
    setToolItem("");
  };
  const onFoodSubmit = (e) => {
    e.preventDefault();
    setFoodItems((cur) => [foodItem, ...cur]);
    setFoodItem("");
  };

  return (
    <div>
      <h2>체크리스트</h2>
      <form onSubmit={onToolSubmit}>
        <ChckInput
          type="text"
          placeholder="장비 준비물"
          onChange={onToolChange}
          value={toolItem}
        />
        <button>add</button>
      </form>
      <form onSubmit={onFoodSubmit}>
        <ChckInput
          type="text"
          placeholder="음식 준비물"
          onChange={onFoodChange}
          value={foodItem}
        />
        <button>add</button>
      </form>
      <ItemTitle>tool</ItemTitle>
      <CheckListBoard qwe={toolItems} />
      <ItemTitle>food</ItemTitle>
      <CheckListBoard qwe={foodItems} />
    </div>
  );
}

export default WriteCheckList;

const ChckInput = styled.input`
  width: 80%;
  height: 20px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  height: 30px;
  width: 90%;
  background-color: blue;
  color: white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
`;
