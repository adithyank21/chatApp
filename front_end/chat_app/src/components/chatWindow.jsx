import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <div key={message._id} className="chat-message">
          <strong>{message.username}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
