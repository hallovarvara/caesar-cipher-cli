import { pipeline } from 'stream';
import path from 'path';

import { validateOptions } from './validateOptions';
import { handleError } from './handleError';

import { read } from './read';
import { write } from './write';

export const startEncryption = (options) => {
  const { action, shift, input, output } = options;

  console.log(action, shift, input, output);

  validateOptions(options);

  const inputFilePath = path.resolve(__dirname, 'input.txt');
  const outputFilePath = path.resolve(__dirname, 'output.txt');

  pipeline(read(inputFilePath), write(outputFilePath), handleError);
};
