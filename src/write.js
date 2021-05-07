import path from 'path';
import { createWriteStream } from 'fs';

import { isSomeUndefined } from './utils';

export const write = (rawTargetFilePath) => {
  if (isSomeUndefined(rawTargetFilePath)) {
    return process.stdout;
  }

  return createWriteStream(path.resolve(__dirname, rawTargetFilePath), {
    flags: 'a',
  });
};
