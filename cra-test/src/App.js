import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("I run all the time");

  const runOnlyOnce = () => {
    console.log("I run only once");
  };

  useEffect(runOnlyOnce, []);
  return (
    <div>
      <h1>Effects: {counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Hello"} />
    </div>
  );
}

export default App;
