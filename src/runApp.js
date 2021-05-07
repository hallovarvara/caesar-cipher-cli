import { pipeline } from 'stream';
import path from 'path';

import { validateOptions } from './validateOptions';
import { handleError } from './handleError';

import { read } from './read';
import { encrypt } from './encrypt';
import { write } from './write';

export const runApp = (options) => {
  const { action, shift, input, output } = options;

  validateOptions(options);

  const inputFilePath = path.resolve(__dirname, 'input.txt');
  const outputFilePath = path.resolve(__dirname, 'output.txt');

  pipeline(
    read(inputFilePath),
    encrypt(action, shift),
    write(outputFilePath),
    handleError,
  );
};
