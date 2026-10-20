import React, { useState } from "react";

function Button({ label }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
    alert(`${label} was clicked!`);
  };

  return (
    <button onClick={handleClick}>
      {label} (Clicked {clickCount} times)
    </button>
  );
}

export default Button;