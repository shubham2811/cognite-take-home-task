import React from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";
import { useChats } from "./utils/useChats";
import { FRIENDS } from "./utils/constants";

const App: React.FC = () => {
  const { selectedFriend, selectedChat, sendMessage, selectFriend } =
    useChats(FRIENDS);

  return (
    <div className="app-container">
      <FriendList
        friends={FRIENDS}
        selected={selectedFriend}
        onSelect={selectFriend}
      />
      <ChatWindow
        friend={selectedFriend}
        messages={selectedChat.messages}
        onSend={sendMessage}
      />
    </div>
  );
};

export default App;
