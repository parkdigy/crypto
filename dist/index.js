'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _md5=require('md5'),_base64=require('base-64'),utf8=require('utf8'),sha=require('sha.js');function md5(text) {
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
};exports.base64=base64;exports.default=index;exports.md5=md5;exports.sha1=sha1;exports.sha256=sha256;