import { EOL } from 'os';

import { alphabet } from './alphabet';

export function encrypt(action, shift) {
  let handleAction;

  switch (action) {
    case 'encode':
    default:
      handleAction = encode;
      break;
    case 'decode':
      handleAction = decode;
      break;
  }

  return async function* (source) {
    for await (const chunk of source) {
      yield encryptText(+shift, chunk, handleAction) + EOL + EOL;
    }
  };
}

const isCharUpperCase = (char) => char === char.toUpperCase();

const isCharLetter = (char) => alphabet.includes(char.toLowerCase());

const encode = (charIndex, shift, alphabetLength) =>
  (charIndex + shift) % alphabetLength;

const decode = (charIndex, shift, alphabetLength) =>
  (charIndex - shift) % alphabetLength;

const encryptChar = (shift, handleAction, char, alphabet) => {
  const charIndex = alphabet.indexOf(char.toLowerCase());
  const encryptedCharIndex = handleAction(charIndex, shift, alphabet.length);
  const encryptedChar = alphabet[encryptedCharIndex];

  return isCharUpperCase(char) ? encryptedChar.toUpperCase() : encryptedChar;
};

const encryptText = (shift, text, handleAction) => {
  const charsArray = text.split('');

  const encryptedCharsArray = charsArray.map((char) =>
    isCharLetter(char)
      ? encryptChar(shift, handleAction, char, alphabet)
      : char,
  );

  return encryptedCharsArray.join('');
};
