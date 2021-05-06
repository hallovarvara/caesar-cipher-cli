import { program } from 'commander';

import { validateOptions } from './validateOptions';

function start(options) {
  const { action, shift, input, output } = options;

  validateOptions(options);

  console.log(action, shift, input, output);
}

export const cli = (args) =>
  program
    .requiredOption('-a, --action <encode/decode>', 'action: encode or decode')
    .requiredOption('-s, --shift <number>', 'shift number', Number)
    .option('-i, --input <path>', 'input file path')
    .option('-o, --output <path>', 'output file path')
    .action(() => start(program.opts()))
    .parse(args);
