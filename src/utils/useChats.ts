import { useState, useCallback, useMemo } from "react";
import type { Chat } from "../types";
import { generateMockReply } from "./mockReply";
import { MOCK_REPLY_DELAY } from "./constants";
import { generateMessageId } from "./messageId";

/**
 * Custom React hook to manage chat conversations with a list of friends.
 *
 * @param friends - An array of friend names to initialize chat sessions with.
 * @returns An object containing:
 * - `chats`: The current state of all chat sessions, each with a friend and their messages.
 * - `selectedFriend`: The currently selected friend's name.
 * - `selectedChat`: The chat object corresponding to the selected friend.
 * - `sendMessage`: Function to send a message to the selected friend. Automatically simulates a reply after a delay.
 * - `selectFriend`: Function to change the currently selected friend.
 *
 * @remarks
 * - Each chat contains a list of messages, where each message has an `id`, `sender`, and `content`.
 * - The hook simulates a friend's reply after a message is sent, using a mock reply generator and a delay.
 * - The hook assumes the existence of `generateMessageId`, `generateMockReply`, and `MOCK_REPLY_DELAY`.
 */
export const useChats = (friends: string[]) => {
  const [chats, setChats] = useState<Chat[]>(() =>
    friends.map((friend) => ({ friend, messages: [] }))
  );
  const [selectedFriend, setSelectedFriend] = useState<string>(friends[0]);

  const selectedChat = useMemo(
    () => chats.find((chat) => chat.friend === selectedFriend)!,
    [chats, selectedFriend]
  );

  const sendMessage = useCallback(
    (text: string) => {
      const messageId = generateMessageId();

      // Add user message
      setChats((prev) =>
        prev.map((chat) =>
          chat.friend === selectedFriend
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  { id: messageId, sender: "me", content: text },
                ],
              }
            : chat
        )
      );

      // Simulate friend reply after delay
      const timeoutId = setTimeout(() => {
        const mockReply = generateMockReply(text);

        setChats((prev) =>
          prev.map((chat) =>
            chat.friend === selectedFriend
              ? {
                  ...chat,
                  messages: [
                    ...chat.messages,
                    {
                      id: generateMessageId(),
                      sender: "friend",
                      content: mockReply,
                    },
                  ],
                }
              : chat
          )
        );
      }, MOCK_REPLY_DELAY);

      // Return cleanup function if needed
      return () => clearTimeout(timeoutId);
    },
    [selectedFriend]
  );

  const selectFriend = useCallback((friend: string) => {
    setSelectedFriend(friend);
  }, []);

  return {
    chats,
    selectedFriend,
    selectedChat,
    sendMessage,
    selectFriend,
  };
};
