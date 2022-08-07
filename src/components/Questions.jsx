import React from "react";
import axios from "axios";
import parse from "html-react-parser";

export default function Questions() {
  // Make a request for a user with a given ID
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(function (response) {
        // handle success
        console.log(response);
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

  const questionEl = questions.map((question) => {
    return (
      <div className="card-question">
        <h3>{parse(question.question)}</h3>
        <form action="#" className="options-container">
          <ul className="donate-now">
            <li>
              <input
                type="radio"
                id="option-1"
                name="fav_language"
                value="option-1"
                className="btn-option"
              />
              <label for="option-1">
                {parse(question.incorrect_answers[0])}
              </label>
              <br />
            </li>
            <li>
              <input
                type="radio"
                id="option-2"
                name="fav_language"
                value="option-2"
                className="btn-option"
              />
              <label for="option-2">
                {parse(question.incorrect_answers[1])}
              </label>
              <br />
            </li>
            <li>
              <input
                type="radio"
                id="option-3"
                name="fav_language"
                value="option-3"
                className="btn-option"
                checked="checked"
              />
              <label for="option-3">
                {parse(question.incorrect_answers[2])}
              </label>
              <br />
            </li>
            <li>
              <input
                type="radio"
                id="option-4"
                name="fav_language"
                value="option-4"
                className="btn-option"
              />
              <label for="option-4">{parse(question.correct_answer)}</label>
              <br />
            </li>
          </ul>

          {/* <button className="btn-option">
            {parse(question.incorrect_answers[0])}
          </button>
          <button className="btn-option">
            {parse(question.correct_answer)}
          </button>
          <button className="btn-option">
            {parse(question.incorrect_answers[1])}
          </button>
          <button className="btn-option">
            {parse(question.incorrect_answers[2])}
          </button> */}
        </form>
        <hr className="divider" />
      </div>
    );
  });

  console.log(questionEl);

  return (
    <div>
      <div className="questions-container">
        {questionEl}
        <button className="btn-check">Check Answers</button>
      </div>
    </div>
  );
}
