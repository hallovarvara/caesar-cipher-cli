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

  if (errorMessages.length > 0) {
    handleError(errorMessages);
  }
};
