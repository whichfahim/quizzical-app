import React from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function Questions(props) {
  // Make a request for a user with a given ID
  const [questions, setQuestions] = React.useState([]);
  // const [correctCount, setCorrectCount] = React.useState(0);

  React.useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(function (response) {
        // handle success
        setQuestions(response?.data?.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  //once check answers is clicked,
  // if checked option is correct, apply correct style, else apply wrong style

  const getRandomObject = (array) => {
    const randomObject = questions[Math.floor(Math.random() * array.length)];
    return randomObject;
  };

  const questionEl = questions.map((question) => {
    return (
      <div className="card-question">
        <h3>{parse(question.question)}</h3>
        <div className="options-container">
          <button className="btn-option" name="btn-group">
            {parse(question.incorrect_answers[0])}
          </button>
          <button
            className={props.showAnswers ? "btn-option-correct" : "btn-option"}
            name="btn-group"
          >
            {parse(question.correct_answer)}
          </button>
          <button className="btn-option" name="btn-group">
            {parse(question.incorrect_answers[1])}
          </button>
          <button className="btn-option" name="btn-group">
            {parse(question.incorrect_answers[2])}
          </button>
        </div>
        <hr className="divider" />
      </div>
    );
  });

  return (
    <div>
      <div className="questions-container" key={5}>
        {questionEl}
      </div>
      <button className="btn-check" onClick={props.handleClick}>
        Check Answers
      </button>
    </div>
  );
}
