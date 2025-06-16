export * from './_md5';
export * from './base64';
export * from './sha1';
export * from './sha256';
import md5 from './_md5';
import sha1 from './sha1';
import sha256 from './sha256';
declare const _default: {
    md5: typeof md5;
    base64: {
        encode(text: string): string;
        decode(encodedText: string): string;
    };
    sha1: typeof sha1;
    sha256: typeof sha256;
};
export default _default;
