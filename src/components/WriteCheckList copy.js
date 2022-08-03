import React, { useState } from "react";

function WriteCheckList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArr) => [toDo, ...currentArr]);
    setToDo("");
  };
  return (
    <div>
      <h2> CHECK LIST ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="챙길 준비물을 적어주세요"
        />
        <button>추가</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <p key={index}> ✅ {item}</p>
      ))}
    </div>
  );
}

export default WriteCheckList;
