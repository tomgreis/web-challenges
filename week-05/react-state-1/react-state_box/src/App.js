import "./styles.css";
import { useState } from "react";

export default function App() {
  // let = isActive;

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log("Aktiv? ", !isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
