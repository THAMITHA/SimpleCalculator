import React from "react";
import { sum, sub, mul, div } from "./Calc";

function App() {
  return (
    <>
      <li>sum of two numbers{sum(40, 4)}</li>
      <li>sum of two numbers{sub(40, 4)}</li>
      <li>sum of two numbers{mul(40, 4)}</li>
      <li>sum of two numbers{div(40, 3)}</li>
    </>
  );
}

export default App;
