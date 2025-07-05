export interface Message {
  id: number;
  sender: "me" | "friend";
  content: string;
}

export interface Chat {
  friend: string;
  messages: Message[];
}
