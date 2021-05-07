import { pipeline } from 'stream';

import { validateOptions } from './validateOptions';
import { handleError } from './handleError';

import { read } from './read';
import { encrypt } from './encrypt';
import { write } from './write';

export const runApp = (options) => {
  const { action, shift, input, output } = options;

  validateOptions(options);

  pipeline(read(input), encrypt(action, shift), write(output), handleError);
};
