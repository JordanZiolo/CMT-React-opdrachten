import { useState } from "react";

const CreateMessage = ({ textInput, setTextInput, message, setMessage }) => {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitMessageHandler = (e) => {
    e.preventDefault();
    if (textInput.trim() === "") return;

    setMessage([...message, textInput]);
    setTextInput("");
  };

  return (
    <form>
      <textarea
        value={textInput}
        cols="50"
        rows="5"
        onChange={userInputHandler}
      ></textarea>

      <button onClick={submitMessageHandler}>Toevoegen</button>
    </form>
  );
};

export default CreateMessage;