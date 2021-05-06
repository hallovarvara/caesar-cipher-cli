import { pipeline } from 'stream';
import path from 'path';
import { program } from 'commander';

import { validateOptions } from './validateOptions';
import { handlePipelineError } from './errorHandling';

import { read } from './read';
import { write } from './write';

function start(options) {
  const { action, shift, input, output } = options;

  console.log(action, shift, input, output);

  validateOptions(options);

  const inputFilePath = path.resolve(__dirname, 'input.txt');
  const outputFilePath = path.resolve(__dirname, 'output.txt');

  pipeline(read(inputFilePath), write(outputFilePath), handlePipelineError);
}

export const cli = (args) =>
  program
    .requiredOption('-a, --action <encode/decode>', 'action: encode or decode')
    .requiredOption('-s, --shift <number>', 'shift number', Number)
    .option('-i, --input <path>', 'input file path')
    .option('-o, --output <path>', 'output file path')
    .action(() => start(program.opts()))
    .parse(args);
