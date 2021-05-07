const FIRST_LETTER_INDEX = 97;
const LAST_LETTER_INDEX = 122;

const generateAlphabet = () => {
  const alphabet = [];

  for (let i = FIRST_LETTER_INDEX; i <= LAST_LETTER_INDEX; i += 1) {
    alphabet.push(String.fromCharCode(i));
  }

  return alphabet;
};

export const alphabet = generateAlphabet();
