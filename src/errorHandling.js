export const getErrorMessage = (errorStatusKey, ...params) =>
  `${ERROR_STATUS[errorStatusKey]}${params.length > 0 ? ': ' : ''}${params.join(
    ', ',
  )}\n`;

export const handleErrors = (errorsData) => {
  errorsData.forEach(([errorStatusKey, ...params]) => {
    process.stderr.write(getErrorMessage(errorStatusKey, ...params));
  });

  process.exit(1);
};

export const ERROR_STATUS = {
  shiftIsNotNumber: 'Please, specify a number after --shift',
  wrongAction:
    'Please, specify, what CLI should do: type after --action encode or decode',
};
