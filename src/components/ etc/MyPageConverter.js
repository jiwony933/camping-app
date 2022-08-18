import React, { useState } from "react";

function MyPageConverter() {
  const [amount, setAmount] = useState();
  const [flipped, setFlipped] = useState(false);
  const onMinutesChange = (e) => {
    setAmount(e.target.value);
  };
  const handleReset = () => {
    setAmount("");
  };

  const handleFlip = () => {
    handleReset();
    setFlipped((cur) => !cur);
  };

  return (
    <div>
      <p>my page</p>
      <label htmlFor="mins">Minutes</label>
      <input
        value={flipped ? Math.round(amount * 60) : amount}
        id="mins"
        placeholder="Minutes"
        onChange={onMinutesChange}
        disabled={flipped}
      />
      <label htmlFor="hours">Hours</label>
      <input
        value={flipped ? amount : Math.round(amount / 60)}
        id="hours"
        placeholder="Hours"
        onChange={onMinutesChange}
        disabled={!flipped}
      />
      <button onClick={handleReset}>reset</button>
      <button onClick={handleFlip}>{flipped ? "Turn Back" : "OK"}</button>
    </div>
  );
}

export default MyPageConverter;
