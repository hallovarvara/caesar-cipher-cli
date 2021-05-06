import { createReadStream } from 'fs';
import { isSomeUndefined } from './utils';

export const read = (rawTargetFilePath) => {
  if (isSomeUndefined(rawTargetFilePath)) {
    console.log('Please, type text for applying Caesar cipher:');
    return process.stdin;
  }

  return createReadStream(rawTargetFilePath, 'utf-8');
};
