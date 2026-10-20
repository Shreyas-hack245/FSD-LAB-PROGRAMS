import React from "react";
import Button from "./Button";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Button with useState</h2>
      <Button label="First Button" />
      <Button label="Second Button" />
      <Button label="Third Button" />
    </div>
  );
}

export default App;