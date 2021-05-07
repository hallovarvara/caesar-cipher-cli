import { program } from 'commander';
import { runApp } from './runApp';

export const cli = (args) =>
  program
    .option('-a, --action <encode/decode>', 'action: encode or decode')
    .option('-s, --shift <number>', 'shift number')
    .option('-i, --input <path>', 'input file path')
    .option('-o, --output <path>', 'output file path')
    .action(() => runApp(program.opts()))
    .parse(args);
