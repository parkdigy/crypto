import _md5 from'md5';import _base64 from'base-64';import utf8 from'utf8';import sha from'sha.js';function md5(text) {
    return _md5(text);
}var base64 = {
    encode: function (text) {
        return _base64.encode(utf8.encode(text));
    },
    decode: function (encodedText) {
        return utf8.decode(_base64.decode(encodedText));
    },
};function sha1(text, encoding) {
    if (encoding === void 0) { encoding = 'hex'; }
    return sha('sha1').update(utf8.encode(text)).digest(encoding);
}function sha256(text, encoding) {
    if (encoding === void 0) { encoding = 'hex'; }
    return sha('sha256').update(utf8.encode(text)).digest(encoding);
}var index = {
    md5: md5,
    base64: base64,
    sha1: sha1,
    sha256: sha256,
};export{base64,index as default,md5,sha1,sha256};