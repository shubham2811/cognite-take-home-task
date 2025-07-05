import React from "react";
import "./FriendList.css";

interface Props {
  friends: string[];
  selected: string;
  onSelect: (name: string) => void;
}

const FriendList: React.FC<Props> = ({ friends, selected, onSelect }) => {
  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <div
          key={friend}
          onClick={() => onSelect(friend)}
          className={`friend-item ${selected === friend ? "active" : ""}`}
        >
          {friend}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
