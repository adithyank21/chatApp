import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const MessageInput = ({ onMessageSent }) => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const sendMessage = async () => {
    if (!username || !text) {
      alert("Both username and message are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/messages", { username, text });
      onMessageSent(response.data);
      setText("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
