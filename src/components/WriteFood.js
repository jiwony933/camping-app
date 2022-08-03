import React from "react";

function WriteFood() {
  const onImgInputClick = (event) => {
    event.preventDefualt();
  };

  return (
    <div>
      food write
      <input type="file" name="file" accept="image/*"></input>
    </div>
  );
}

export default WriteFood;
