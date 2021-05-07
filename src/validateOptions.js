import path from 'path';
import { EOL } from 'os';
import { existsSync } from 'fs';

import { handleError } from './handleError';
import { isSomeUndefined, isNumber } from './utils';

export const validateOptions = (options) => {
  const { action, shift, input, output } = options;

  const errorMessages = [];

  if (isSomeUndefined(shift)) {
    errorMessages.push(
      'Please, specify a number after --shift or -s (required).',
    );
  }

  if (!isSomeUndefined(shift) && !isNumber(shift)) {
    errorMessages.push(
      `Please, type a number after --shift or -s (you specified "${shift}").`,
    );
  }

  if (isSomeUndefined(action)) {
    errorMessages.push(
      'Please, specify, encode or decode text after --action or -a (required).',
    );
  }

  if (!isSomeUndefined(action) && action !== 'decode' && action !== 'encode') {
    errorMessages.push(
      `Please, type "encode" or "decode" after --action or -a (you specified "${action}").`,
    );
  }

  if (!isSomeUndefined(input)) {
    const inputFilePath = path.resolve(__dirname, input);

    if (!existsSync(inputFilePath)) {
      errorMessages.push(
        `File for reading doesn't exist by provided path:${EOL}"${inputFilePath}"`,
      );
    }
  }

  if (!isSomeUndefined(output)) {
    const outputFilePath = path.resolve(__dirname, output);

    if (!existsSync(outputFilePath)) {
      errorMessages.push(
        `File for writing doesn't exist by provided path:${EOL}"${outputFilePath}"`,
      );
    }
  }

  if (errorMessages.length > 0) {
    handleError(errorMessages);
  }
};
