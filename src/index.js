import { program } from 'commander';

function start (options) {
  const { action, shift, input, output } = options;

  console.log(action, shift, input, output);
}

export const cli = (args) => program
  .requiredOption('-a, --action <type>', 'action: encode or decode')
  .requiredOption('-s, --shift <number>', 'shift number', Number)
  .option('-i, --input <path>', 'input file path')
  .option('-o, --output <path>', 'output file path')
  .action(() => start(program.opts()))
  .parse(args);
