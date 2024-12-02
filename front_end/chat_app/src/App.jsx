import React, { useState } from "react";
import ChatWindow from "./components/chatWindow";
import MessageInput from "./components/messageInput";
import './App.css'
const App = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Chat App</h1>
      <ChatWindow messages={messages} />
      <MessageInput onMessageSent={handleNewMessage} />
    </div>
  );
};

export default App;
