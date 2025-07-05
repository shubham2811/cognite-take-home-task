let messageIdCounter = 0;

/**
 * Generates a unique numeric message ID based on the current timestamp and an incrementing counter.
 *
 * @returns {number} A unique message ID.
 */
export const generateMessageId = (): number => {
  return Date.now() + ++messageIdCounter;
};
