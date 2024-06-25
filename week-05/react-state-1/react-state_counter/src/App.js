import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount;
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count - 1);
            console.log("-");
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
            console.log("+");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
