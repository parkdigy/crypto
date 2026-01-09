import sha from 'sha.js';
import utf8 from 'utf8';
import { type BinaryToTextEncoding } from 'crypto';

export function sha1(text: string, encoding: BinaryToTextEncoding = 'hex'): string {
  return sha('sha1').update(utf8.encode(text)).digest(encoding);
}

export default sha1;
