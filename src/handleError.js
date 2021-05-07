import { EOL } from 'os';
import chalk from 'chalk';

export const handleError = (errorsData) => {
  if (Array.isArray(errorsData)) {
    errorsData.forEach((errorMessage) => {
      process.stderr.write(chalk.bgYellow(errorMessage) + EOL);
    });
  } else if (errorsData) {
    process.stderr.write(chalk.bgYellow(errorsData) + EOL);
  }

  process.stdout.write(EOL);

  process.exit(1);
};
