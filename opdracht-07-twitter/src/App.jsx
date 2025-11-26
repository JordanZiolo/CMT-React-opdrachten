import { useState } from "react";
import CreateMessage from "./components/CreatMessage.jsx";
import MessageList from "./components/MessageList.jsx";

function App() {
  const [textInput, setTextInput] = useState("");
  const [message, setMessage] = useState([]);

  let name = "Jordan";

  return (
    <>
      <CreateMessage
        textInput={textInput}
        setTextInput={setTextInput}
        message={message}
        setMessage={setMessage}
      />

      <MessageList name={name} message={message} />
    </>
  );
}

export default App;