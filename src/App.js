import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling Face.",
  "😪": "Sleepy.",
  "😕": "Confused.",
  "😟": "Worried.",
  "😲": "Astonished.",
  "😫": "Tired."
};

var emojiKnown = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! Not available in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={inputEmojiHandler} />
      <div>{meaning} </div>
      <div className="heading-class"> Emojis in our Database </div>
      {emojiKnown.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
