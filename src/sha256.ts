import sha from 'sha.js';
import utf8 from 'utf8';
import { type BinaryToTextEncoding } from 'crypto';

export function sha256(text: string, encoding: BinaryToTextEncoding = 'hex'): string {
  return sha('sha256').update(utf8.encode(text)).digest(encoding);
}

export default sha256;
