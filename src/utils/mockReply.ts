/**
 * Generates a mock reply string based on the provided user message.
 *
 * If the user message contains greetings such as "hi" or "hello" (case-insensitive),
 * a specific greeting reply is returned. Otherwise, a random reply is selected from a predefined list.
 *
 * @param userMessage - The message from the user to generate a reply for.
 * @returns A mock reply string.
 */
export const generateMockReply = (userMessage: string): string => {
  const replies = [
    "That's interesting!",
    "Can you tell me more?",
    "Sounds good!",
    "Haha, nice one!",
    "I'm not sure I get it 😅",
    "What do you mean?",
    "Cool!",
    "Let's catch up soon.",
    "Okay!",
    "LOL",
  ];

  // Optional: customize reply based on message
  if (
    userMessage.toLowerCase().includes("hi") ||
    userMessage.toLowerCase().includes("hello")
  ) {
    return "Hey there!";
  }

  return replies[Math.floor(Math.random() * replies.length)];
};
