import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ReactDOM } from "react";
import "./App.css";
import React from "react";
import Start from "./components/Start";
import Questions from "./components/Questions";

function App() {
  const [start, setStart] = React.useState(false);
  function toggleStart() {
    setStart((prev) => !prev);
  }
  const [check, setCheck] = React.useState(false);

  function checkAnswers() {
    console.log("checked");
    setCheck((prev) => !prev);
  }

  return (
    <div>
      {!start ? (
        <Start toggleStart={toggleStart} />
      ) : (
        <Questions handleClick={checkAnswers} showAnswers={check} />
      )}
    </div>
  );
}

export default App;
