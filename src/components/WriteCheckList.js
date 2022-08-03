import React, { useState, useEffect } from "react";
import CheckListBoard from "./WriteCheckListBoard";

function WriteCheckList() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const onChange = (e) => {
    setItem(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setItems((cur) => [item, ...cur]);
    setItem("");
  };

  return (
    <div>
      <h3>체크리스트</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write"
          onChange={onChange}
          value={item}
        />
        <button>add</button>
      </form>
      <CheckListBoard items={items} />
    </div>
  );
}

export default WriteCheckList;
