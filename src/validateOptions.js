import { handleErrors } from './errorHandling';
import { isSomeUndefined } from './utils';

export const validateOptions = (options) => {
  const { action, shift, input, output } = options;

  const isShiftNumber = typeof shift === 'number' && !isNaN(shift);

  const errorsData = [];

  if (!isSomeUndefined(shift) && !isShiftNumber) {
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
