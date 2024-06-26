import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Klick mich!</Button>
      <Button>Klick mich!</Button>
      <Button>Klick mich!</Button>
      <Button>Klick mich!</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
