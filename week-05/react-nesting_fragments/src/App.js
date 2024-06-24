import React from "react";
import "./styles.css";


export default function App() {
  return (
    <main className="flex-container">
<Boxes />
    </main>
  );
}

function Boxes({color}) {
  return (
    <>
    <Box color="#007bff" />
    <Box color="#007bff" />
    <Box color="#007bff" />
    </>
  )
}