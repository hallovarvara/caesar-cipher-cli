import path from 'path';
import { EOL } from 'os';
import { createReadStream } from 'fs';

import { isSomeUndefined } from './utils';

export const read = (rawTargetFilePath) => {
  if (isSomeUndefined(rawTargetFilePath)) {
    process.stdout.write(
      'Please, type text for applying Caesar cipher (CTRL + C for exit):' + EOL,
    );
    return process.stdin.setEncoding('utf8');
  }

  return createReadStream(path.resolve(__dirname, rawTargetFilePath), 'utf-8');
};
