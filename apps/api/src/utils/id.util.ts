import { customAlphabet } from 'nanoid';

const NANO_ID_LENGTH = 12;

// Alphabet containing numbers and lowercase letters (avoiding similar looking characters)
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

// Create specialized ID generators for different entities
export const generateUserId = customAlphabet(alphabet, NANO_ID_LENGTH);
export const generatePostId = customAlphabet(alphabet, NANO_ID_LENGTH);
export const generateCommentId = customAlphabet(alphabet, NANO_ID_LENGTH);

// Generic ID generator with prefix support
export const generateId = (prefix?: string) => {
  const id = customAlphabet(alphabet, NANO_ID_LENGTH)();
  return prefix ? `${prefix}_${id}` : id;
};
