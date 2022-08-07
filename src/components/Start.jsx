import React from "react";
import blob1 from "../assets/images/blob1.png";
import blob2 from "../assets/images/blob2.png";

export default function Start(props) {
  return (
    <main>
      <img src={blob1} className="blob-1"></img>
      <img src={blob2} className="blob-2"></img>
      <h1 className="title">Quizzical</h1>
      <p>Test your knowledge!</p>
      <button onClick={props.toggleStart} className="btn-start">
        Start quiz
      </button>
    </main>
  );
}
