import React, { useState } from "react";
import type { Message } from "../../types";
import "./ChatWindow.css";

interface Props {
  friend: string;
  messages: Message[];
  onSend: (message: string) => void;
}

const ChatWindow: React.FC<Props> = ({ friend, messages, onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chat with {friend}</div>
      <div className="message-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === "me" ? "me" : "friend"}`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
