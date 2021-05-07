import { createWriteStream } from 'fs';

import { isSomeUndefined } from './utils';

export const write = (rawTargetFilePath) => {
  if (isSomeUndefined(rawTargetFilePath)) {
    return process.stdout;
  }

  return createWriteStream(rawTargetFilePath, { flags: 'a' });
};
