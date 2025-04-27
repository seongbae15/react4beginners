import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("I run all the time");
  const runOnlyOnce = () => {
    console.log("I run only once");
  };

  useEffect(runOnlyOnce, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes, ", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes, ", counter);
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>Effects: {counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Hello"} />
    </div>
  );
}

export default App;
