import { EOL } from 'os';

export const handleError = (errorsData) => {
  if (Array.isArray(errorsData)) {
    errorsData.forEach((errorMessage) => {
      process.stderr.write(errorMessage + EOL);
    });
  } else if (errorsData) {
    process.stderr.write(errorsData + EOL);
  }

  process.exit(1);
};
