import _base64 from 'base-64';
import utf8 from 'utf8';

export const base64 = {
  encode(text: string): string {
    return _base64.encode(utf8.encode(text));
  },
  decode(encodedText: string): string {
    return utf8.decode(_base64.decode(encodedText));
  },
};

export default base64;
