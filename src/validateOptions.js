import { handleErrors } from './errorHandling';
import { isSomeUndefined, isNumber } from './utils';

export const validateOptions = (options) => {
  const { action, shift, input, output } = options;

  const errorsData = [];

  if (!isSomeUndefined(shift) && !isNumber(shift)) {
    errorsData.push(['shiftIsNotNumber']);
  }

  if (!isSomeUndefined(action) && action !== 'decode' && action !== 'encode') {
    console.log(options);
    errorsData.push(['wrongAction']);
  }

  if (errorsData.length > 0) {
    handleErrors(errorsData);
  }
};
