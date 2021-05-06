import { createWriteStream } from 'fs';
import { EOL } from 'os';

import { isSomeUndefined } from './utils';

export const write = (rawTargetFilePath) => {
  if (isSomeUndefined(rawTargetFilePath)) {
    return process.stdout;
  }

  return createWriteStream(rawTargetFilePath, { flags: 'a' }).on(
    'close',
    () => {
      createWriteStream(rawTargetFilePath, { flags: 'a' }).write(EOL + EOL);
    },
  );
};
