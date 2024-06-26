import "./styles.css";

import Header from "./components/Header.js"
import { Children } from "react";


export default function App() {
  return (
    <>
      <Header className="header" >
        {Children}
        </Header>
      <main>content goes here…</main>
    </>
  );
}
