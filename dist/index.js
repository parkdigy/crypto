'use strict';Object.defineProperty(exports,'__esModule',{value:true});var require$$0=require('buffer');require('crypto');function md5(text) {
    return md5();
}var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}var base64$2 = {exports: {}};/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */
var base64$1 = base64$2.exports;

var hasRequiredBase64;

function requireBase64 () {
	if (hasRequiredBase64) return base64$2.exports;
	hasRequiredBase64 = 1;
	(function (module, exports$1) {
(function(root) {

			// Detect free variables `exports`.
			var freeExports = exports$1;

			// Detect free variable `module`.
			var freeModule = module &&
				module.exports == freeExports && module;

			// Detect free variable `global`, from Node.js or Browserified code, and use
			// it as `root`.
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
			if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
				root = freeGlobal;
			}

			/*--------------------------------------------------------------------------*/

			var InvalidCharacterError = function(message) {
				this.message = message;
			};
			InvalidCharacterError.prototype = new Error;
			InvalidCharacterError.prototype.name = 'InvalidCharacterError';

			var error = function(message) {
				// Note: the error messages used throughout this file match those used by
				// the native `atob`/`btoa` implementation in Chromium.
				throw new InvalidCharacterError(message);
			};

			var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
			// http://whatwg.org/html/common-microsyntaxes.html#space-character
			var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

			// `decode` is designed to be fully compatible with `atob` as described in the
			// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
			// The optimized base64-decoding algorithm used is based on @atk’s excellent
			// implementation. https://gist.github.com/atk/1020396
			var decode = function(input) {
				input = String(input)
					.replace(REGEX_SPACE_CHARACTERS, '');
				var length = input.length;
				if (length % 4 == 0) {
					input = input.replace(/==?$/, '');
					length = input.length;
				}
				if (
					length % 4 == 1 ||
					// http://whatwg.org/C#alphanumeric-ascii-characters
					/[^+a-zA-Z0-9/]/.test(input)
				) {
					error(
						'Invalid character: the string to be decoded is not correctly encoded.'
					);
				}
				var bitCounter = 0;
				var bitStorage;
				var buffer;
				var output = '';
				var position = -1;
				while (++position < length) {
					buffer = TABLE.indexOf(input.charAt(position));
					bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
					// Unless this is the first of a group of 4 characters…
					if (bitCounter++ % 4) {
						// …convert the first 8 bits to a single ASCII character.
						output += String.fromCharCode(
							0xFF & bitStorage >> (-2 * bitCounter & 6)
						);
					}
				}
				return output;
			};

			// `encode` is designed to be fully compatible with `btoa` as described in the
			// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
			var encode = function(input) {
				input = String(input);
				if (/[^\0-\xFF]/.test(input)) {
					// Note: no need to special-case astral symbols here, as surrogates are
					// matched, and the input is supposed to only contain ASCII anyway.
					error(
						'The string to be encoded contains characters outside of the ' +
						'Latin1 range.'
					);
				}
				var padding = input.length % 3;
				var output = '';
				var position = -1;
				var a;
				var b;
				var c;
				var buffer;
				// Make sure any padding is handled outside of the loop.
				var length = input.length - padding;

				while (++position < length) {
					// Read three bytes, i.e. 24 bits.
					a = input.charCodeAt(position) << 16;
					b = input.charCodeAt(++position) << 8;
					c = input.charCodeAt(++position);
					buffer = a + b + c;
					// Turn the 24 bits into four chunks of 6 bits each, and append the
					// matching character for each of them to the output.
					output += (
						TABLE.charAt(buffer >> 18 & 0x3F) +
						TABLE.charAt(buffer >> 12 & 0x3F) +
						TABLE.charAt(buffer >> 6 & 0x3F) +
						TABLE.charAt(buffer & 0x3F)
					);
				}

				if (padding == 2) {
					a = input.charCodeAt(position) << 8;
					b = input.charCodeAt(++position);
					buffer = a + b;
					output += (
						TABLE.charAt(buffer >> 10) +
						TABLE.charAt((buffer >> 4) & 0x3F) +
						TABLE.charAt((buffer << 2) & 0x3F) +
						'='
					);
				} else if (padding == 1) {
					buffer = input.charCodeAt(position);
					output += (
						TABLE.charAt(buffer >> 2) +
						TABLE.charAt((buffer << 4) & 0x3F) +
						'=='
					);
				}

				return output;
			};

			var base64 = {
				'encode': encode,
				'decode': decode,
				'version': '1.0.0'
			};

			// Some AMD build optimizers, like r.js, check for specific condition patterns
			// like the following:
			if (freeExports && !freeExports.nodeType) {
				if (freeModule) { // in Node.js or RingoJS v0.8.0+
					freeModule.exports = base64;
				} else { // in Narwhal or RingoJS v0.7.0-
					for (var key in base64) {
						base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
					}
				}
			} else { // in Rhino or a web browser
				root.base64 = base64;
			}

		}(base64$1)); 
	} (base64$2, base64$2.exports));
	return base64$2.exports;
}var base64Exports = requireBase64();
var _base64 = /*@__PURE__*/getDefaultExportFromCjs(base64Exports);var utf8$1 = {};/*! https://mths.be/utf8js v3.0.0 by @mathias */

var hasRequiredUtf8;

function requireUtf8 () {
	if (hasRequiredUtf8) return utf8$1;
	hasRequiredUtf8 = 1;
	(function (exports$1) {
(function(root) {

			var stringFromCharCode = String.fromCharCode;

			// Taken from https://mths.be/punycode
			function ucs2decode(string) {
				var output = [];
				var counter = 0;
				var length = string.length;
				var value;
				var extra;
				while (counter < length) {
					value = string.charCodeAt(counter++);
					if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
						// high surrogate, and there is a next character
						extra = string.charCodeAt(counter++);
						if ((extra & 0xFC00) == 0xDC00) { // low surrogate
							output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
						} else {
							// unmatched surrogate; only append this code unit, in case the next
							// code unit is the high surrogate of a surrogate pair
							output.push(value);
							counter--;
						}
					} else {
						output.push(value);
					}
				}
				return output;
			}

			// Taken from https://mths.be/punycode
			function ucs2encode(array) {
				var length = array.length;
				var index = -1;
				var value;
				var output = '';
				while (++index < length) {
					value = array[index];
					if (value > 0xFFFF) {
						value -= 0x10000;
						output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
						value = 0xDC00 | value & 0x3FF;
					}
					output += stringFromCharCode(value);
				}
				return output;
			}

			function checkScalarValue(codePoint) {
				if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
					throw Error(
						'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
						' is not a scalar value'
					);
				}
			}
			/*--------------------------------------------------------------------------*/

			function createByte(codePoint, shift) {
				return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
			}

			function encodeCodePoint(codePoint) {
				if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
					return stringFromCharCode(codePoint);
				}
				var symbol = '';
				if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
					symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
				}
				else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
					checkScalarValue(codePoint);
					symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
					symbol += createByte(codePoint, 6);
				}
				else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
					symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
					symbol += createByte(codePoint, 12);
					symbol += createByte(codePoint, 6);
				}
				symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
				return symbol;
			}

			function utf8encode(string) {
				var codePoints = ucs2decode(string);
				var length = codePoints.length;
				var index = -1;
				var codePoint;
				var byteString = '';
				while (++index < length) {
					codePoint = codePoints[index];
					byteString += encodeCodePoint(codePoint);
				}
				return byteString;
			}

			/*--------------------------------------------------------------------------*/

			function readContinuationByte() {
				if (byteIndex >= byteCount) {
					throw Error('Invalid byte index');
				}

				var continuationByte = byteArray[byteIndex] & 0xFF;
				byteIndex++;

				if ((continuationByte & 0xC0) == 0x80) {
					return continuationByte & 0x3F;
				}

				// If we end up here, it’s not a continuation byte
				throw Error('Invalid continuation byte');
			}

			function decodeSymbol() {
				var byte1;
				var byte2;
				var byte3;
				var byte4;
				var codePoint;

				if (byteIndex > byteCount) {
					throw Error('Invalid byte index');
				}

				if (byteIndex == byteCount) {
					return false;
				}

				// Read first byte
				byte1 = byteArray[byteIndex] & 0xFF;
				byteIndex++;

				// 1-byte sequence (no continuation bytes)
				if ((byte1 & 0x80) == 0) {
					return byte1;
				}

				// 2-byte sequence
				if ((byte1 & 0xE0) == 0xC0) {
					byte2 = readContinuationByte();
					codePoint = ((byte1 & 0x1F) << 6) | byte2;
					if (codePoint >= 0x80) {
						return codePoint;
					} else {
						throw Error('Invalid continuation byte');
					}
				}

				// 3-byte sequence (may include unpaired surrogates)
				if ((byte1 & 0xF0) == 0xE0) {
					byte2 = readContinuationByte();
					byte3 = readContinuationByte();
					codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
					if (codePoint >= 0x0800) {
						checkScalarValue(codePoint);
						return codePoint;
					} else {
						throw Error('Invalid continuation byte');
					}
				}

				// 4-byte sequence
				if ((byte1 & 0xF8) == 0xF0) {
					byte2 = readContinuationByte();
					byte3 = readContinuationByte();
					byte4 = readContinuationByte();
					codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
						(byte3 << 0x06) | byte4;
					if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
						return codePoint;
					}
				}

				throw Error('Invalid UTF-8 detected');
			}

			var byteArray;
			var byteCount;
			var byteIndex;
			function utf8decode(byteString) {
				byteArray = ucs2decode(byteString);
				byteCount = byteArray.length;
				byteIndex = 0;
				var codePoints = [];
				var tmp;
				while ((tmp = decodeSymbol()) !== false) {
					codePoints.push(tmp);
				}
				return ucs2encode(codePoints);
			}

			/*--------------------------------------------------------------------------*/

			root.version = '3.0.0';
			root.encode = utf8encode;
			root.decode = utf8decode;

		}(exports$1)); 
	} (utf8$1));
	return utf8$1;
}var utf8Exports = requireUtf8();
var utf8 = /*@__PURE__*/getDefaultExportFromCjs(utf8Exports);const base64 = {
    encode(text) {
        return _base64.encode(utf8.encode(text));
    },
    decode(encodedText) {
        return utf8.decode(_base64.decode(encodedText));
    },
};var sha_js = {exports: {}};var inherits = {exports: {}};var inherits_browser = {exports: {}};var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	try {
	  var util = require('util');
	  /* istanbul ignore next */
	  if (typeof util.inherits !== 'function') throw '';
	  inherits.exports = util.inherits;
	} catch (e) {
	  /* istanbul ignore next */
	  inherits.exports = requireInherits_browser();
	}
	return inherits.exports;
}var safeBuffer = {exports: {}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var hasRequiredSafeBuffer;

function requireSafeBuffer () {
	if (hasRequiredSafeBuffer) return safeBuffer.exports;
	hasRequiredSafeBuffer = 1;
	(function (module, exports$1) {
		/* eslint-disable node/no-deprecated-api */
		var buffer = require$$0;
		var Buffer = buffer.Buffer;

		// alternative to using Object.keys for old browsers
		function copyProps (src, dst) {
		  for (var key in src) {
		    dst[key] = src[key];
		  }
		}
		if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
		  module.exports = buffer;
		} else {
		  // Copy properties from require('buffer')
		  copyProps(buffer, exports$1);
		  exports$1.Buffer = SafeBuffer;
		}

		function SafeBuffer (arg, encodingOrOffset, length) {
		  return Buffer(arg, encodingOrOffset, length)
		}

		SafeBuffer.prototype = Object.create(Buffer.prototype);

		// Copy static methods from Buffer
		copyProps(Buffer, SafeBuffer);

		SafeBuffer.from = function (arg, encodingOrOffset, length) {
		  if (typeof arg === 'number') {
		    throw new TypeError('Argument must not be a number')
		  }
		  return Buffer(arg, encodingOrOffset, length)
		};

		SafeBuffer.alloc = function (size, fill, encoding) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  var buf = Buffer(size);
		  if (fill !== undefined) {
		    if (typeof encoding === 'string') {
		      buf.fill(fill, encoding);
		    } else {
		      buf.fill(fill);
		    }
		  } else {
		    buf.fill(0);
		  }
		  return buf
		};

		SafeBuffer.allocUnsafe = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return Buffer(size)
		};

		SafeBuffer.allocUnsafeSlow = function (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('Argument must be a number')
		  }
		  return buffer.SlowBuffer(size)
		}; 
	} (safeBuffer, safeBuffer.exports));
	return safeBuffer.exports;
}var isarray;
var hasRequiredIsarray;

function requireIsarray () {
	if (hasRequiredIsarray) return isarray;
	hasRequiredIsarray = 1;
	var toString = {}.toString;

	isarray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};
	return isarray;
}var type;
var hasRequiredType;

function requireType () {
	if (hasRequiredType) return type;
	hasRequiredType = 1;

	/** @type {import('./type')} */
	type = TypeError;
	return type;
}var esObjectAtoms;
var hasRequiredEsObjectAtoms;

function requireEsObjectAtoms () {
	if (hasRequiredEsObjectAtoms) return esObjectAtoms;
	hasRequiredEsObjectAtoms = 1;

	/** @type {import('.')} */
	esObjectAtoms = Object;
	return esObjectAtoms;
}var esErrors;
var hasRequiredEsErrors;

function requireEsErrors () {
	if (hasRequiredEsErrors) return esErrors;
	hasRequiredEsErrors = 1;

	/** @type {import('.')} */
	esErrors = Error;
	return esErrors;
}var _eval;
var hasRequired_eval;

function require_eval () {
	if (hasRequired_eval) return _eval;
	hasRequired_eval = 1;

	/** @type {import('./eval')} */
	_eval = EvalError;
	return _eval;
}var range;
var hasRequiredRange;

function requireRange () {
	if (hasRequiredRange) return range;
	hasRequiredRange = 1;

	/** @type {import('./range')} */
	range = RangeError;
	return range;
}var ref;
var hasRequiredRef;

function requireRef () {
	if (hasRequiredRef) return ref;
	hasRequiredRef = 1;

	/** @type {import('./ref')} */
	ref = ReferenceError;
	return ref;
}var syntax;
var hasRequiredSyntax;

function requireSyntax () {
	if (hasRequiredSyntax) return syntax;
	hasRequiredSyntax = 1;

	/** @type {import('./syntax')} */
	syntax = SyntaxError;
	return syntax;
}var uri;
var hasRequiredUri;

function requireUri () {
	if (hasRequiredUri) return uri;
	hasRequiredUri = 1;

	/** @type {import('./uri')} */
	uri = URIError;
	return uri;
}var abs;
var hasRequiredAbs;

function requireAbs () {
	if (hasRequiredAbs) return abs;
	hasRequiredAbs = 1;

	/** @type {import('./abs')} */
	abs = Math.abs;
	return abs;
}var floor;
var hasRequiredFloor;

function requireFloor () {
	if (hasRequiredFloor) return floor;
	hasRequiredFloor = 1;

	/** @type {import('./floor')} */
	floor = Math.floor;
	return floor;
}var max;
var hasRequiredMax;

function requireMax () {
	if (hasRequiredMax) return max;
	hasRequiredMax = 1;

	/** @type {import('./max')} */
	max = Math.max;
	return max;
}var min;
var hasRequiredMin;

function requireMin () {
	if (hasRequiredMin) return min;
	hasRequiredMin = 1;

	/** @type {import('./min')} */
	min = Math.min;
	return min;
}var pow;
var hasRequiredPow;

function requirePow () {
	if (hasRequiredPow) return pow;
	hasRequiredPow = 1;

	/** @type {import('./pow')} */
	pow = Math.pow;
	return pow;
}var round;
var hasRequiredRound;

function requireRound () {
	if (hasRequiredRound) return round;
	hasRequiredRound = 1;

	/** @type {import('./round')} */
	round = Math.round;
	return round;
}var _isNaN;
var hasRequired_isNaN;

function require_isNaN () {
	if (hasRequired_isNaN) return _isNaN;
	hasRequired_isNaN = 1;

	/** @type {import('./isNaN')} */
	_isNaN = Number.isNaN || function isNaN(a) {
		return a !== a;
	};
	return _isNaN;
}var sign;
var hasRequiredSign;

function requireSign () {
	if (hasRequiredSign) return sign;
	hasRequiredSign = 1;

	var $isNaN = /*@__PURE__*/ require_isNaN();

	/** @type {import('./sign')} */
	sign = function sign(number) {
		if ($isNaN(number) || number === 0) {
			return number;
		}
		return number < 0 ? -1 : 1;
	};
	return sign;
}var gOPD;
var hasRequiredGOPD;

function requireGOPD () {
	if (hasRequiredGOPD) return gOPD;
	hasRequiredGOPD = 1;

	/** @type {import('./gOPD')} */
	gOPD = Object.getOwnPropertyDescriptor;
	return gOPD;
}var gopd;
var hasRequiredGopd;

function requireGopd () {
	if (hasRequiredGopd) return gopd;
	hasRequiredGopd = 1;

	/** @type {import('.')} */
	var $gOPD = /*@__PURE__*/ requireGOPD();

	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	gopd = $gOPD;
	return gopd;
}var esDefineProperty;
var hasRequiredEsDefineProperty;

function requireEsDefineProperty () {
	if (hasRequiredEsDefineProperty) return esDefineProperty;
	hasRequiredEsDefineProperty = 1;

	/** @type {import('.')} */
	var $defineProperty = Object.defineProperty || false;
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
		} catch (e) {
			// IE 8 has a broken defineProperty
			$defineProperty = false;
		}
	}

	esDefineProperty = $defineProperty;
	return esDefineProperty;
}var shams$1;
var hasRequiredShams$1;

function requireShams$1 () {
	if (hasRequiredShams$1) return shams$1;
	hasRequiredShams$1 = 1;

	/** @type {import('./shams')} */
	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	shams$1 = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		/** @type {{ [k in symbol]?: unknown }} */
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			// eslint-disable-next-line no-extra-parens
			var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};
	return shams$1;
}var hasSymbols;
var hasRequiredHasSymbols;

function requireHasSymbols () {
	if (hasRequiredHasSymbols) return hasSymbols;
	hasRequiredHasSymbols = 1;

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams$1();

	/** @type {import('.')} */
	hasSymbols = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};
	return hasSymbols;
}var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;

function requireReflect_getPrototypeOf () {
	if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
	hasRequiredReflect_getPrototypeOf = 1;

	/** @type {import('./Reflect.getPrototypeOf')} */
	Reflect_getPrototypeOf = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;
	return Reflect_getPrototypeOf;
}var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;

function requireObject_getPrototypeOf () {
	if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
	hasRequiredObject_getPrototypeOf = 1;

	var $Object = /*@__PURE__*/ requireEsObjectAtoms();

	/** @type {import('./Object.getPrototypeOf')} */
	Object_getPrototypeOf = $Object.getPrototypeOf || null;
	return Object_getPrototypeOf;
}var implementation;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var toStr = Object.prototype.toString;
	var max = Math.max;
	var funcType = '[object Function]';

	var concatty = function concatty(a, b) {
	    var arr = [];

	    for (var i = 0; i < a.length; i += 1) {
	        arr[i] = a[i];
	    }
	    for (var j = 0; j < b.length; j += 1) {
	        arr[j + a.length] = b[j];
	    }

	    return arr;
	};

	var slicy = function slicy(arrLike, offset) {
	    var arr = [];
	    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
	        arr[j] = arrLike[i];
	    }
	    return arr;
	};

	var joiny = function (arr, joiner) {
	    var str = '';
	    for (var i = 0; i < arr.length; i += 1) {
	        str += arr[i];
	        if (i + 1 < arr.length) {
	            str += joiner;
	        }
	    }
	    return str;
	};

	implementation = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slicy(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                concatty(args, arguments)
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        }
	        return target.apply(
	            that,
	            concatty(args, arguments)
	        );

	    };

	    var boundLength = max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs[i] = '$' + i;
	    }

	    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};
	return implementation;
}var functionBind;
var hasRequiredFunctionBind;

function requireFunctionBind () {
	if (hasRequiredFunctionBind) return functionBind;
	hasRequiredFunctionBind = 1;

	var implementation = requireImplementation();

	functionBind = Function.prototype.bind || implementation;
	return functionBind;
}var functionCall;
var hasRequiredFunctionCall;

function requireFunctionCall () {
	if (hasRequiredFunctionCall) return functionCall;
	hasRequiredFunctionCall = 1;

	/** @type {import('./functionCall')} */
	functionCall = Function.prototype.call;
	return functionCall;
}var functionApply;
var hasRequiredFunctionApply;

function requireFunctionApply () {
	if (hasRequiredFunctionApply) return functionApply;
	hasRequiredFunctionApply = 1;

	/** @type {import('./functionApply')} */
	functionApply = Function.prototype.apply;
	return functionApply;
}var reflectApply;
var hasRequiredReflectApply;

function requireReflectApply () {
	if (hasRequiredReflectApply) return reflectApply;
	hasRequiredReflectApply = 1;

	/** @type {import('./reflectApply')} */
	reflectApply = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
	return reflectApply;
}var actualApply;
var hasRequiredActualApply;

function requireActualApply () {
	if (hasRequiredActualApply) return actualApply;
	hasRequiredActualApply = 1;

	var bind = requireFunctionBind();

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();
	var $reflectApply = requireReflectApply();

	/** @type {import('./actualApply')} */
	actualApply = $reflectApply || bind.call($call, $apply);
	return actualApply;
}var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;

function requireCallBindApplyHelpers () {
	if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
	hasRequiredCallBindApplyHelpers = 1;

	var bind = requireFunctionBind();
	var $TypeError = /*@__PURE__*/ requireType();

	var $call = requireFunctionCall();
	var $actualApply = requireActualApply();

	/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
	callBindApplyHelpers = function callBindBasic(args) {
		if (args.length < 1 || typeof args[0] !== 'function') {
			throw new $TypeError('a function is required');
		}
		return $actualApply(bind, $call, args);
	};
	return callBindApplyHelpers;
}var get;
var hasRequiredGet;

function requireGet () {
	if (hasRequiredGet) return get;
	hasRequiredGet = 1;

	var callBind = requireCallBindApplyHelpers();
	var gOPD = /*@__PURE__*/ requireGopd();

	var hasProtoAccessor;
	try {
		// eslint-disable-next-line no-extra-parens, no-proto
		hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
	} catch (e) {
		if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
			throw e;
		}
	}

	// eslint-disable-next-line no-extra-parens
	var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

	var $Object = Object;
	var $getPrototypeOf = $Object.getPrototypeOf;

	/** @type {import('./get')} */
	get = desc && typeof desc.get === 'function'
		? callBind([desc.get])
		: typeof $getPrototypeOf === 'function'
			? /** @type {import('./get')} */ function getDunder(value) {
				// eslint-disable-next-line eqeqeq
				return $getPrototypeOf(value == null ? value : $Object(value));
			}
			: false;
	return get;
}var getProto;
var hasRequiredGetProto;

function requireGetProto () {
	if (hasRequiredGetProto) return getProto;
	hasRequiredGetProto = 1;

	var reflectGetProto = requireReflect_getPrototypeOf();
	var originalGetProto = requireObject_getPrototypeOf();

	var getDunderProto = /*@__PURE__*/ requireGet();

	/** @type {import('.')} */
	getProto = reflectGetProto
		? function getProto(O) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return reflectGetProto(O);
		}
		: originalGetProto
			? function getProto(O) {
				if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
					throw new TypeError('getProto: not an object');
				}
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return originalGetProto(O);
			}
			: getDunderProto
				? function getProto(O) {
					// @ts-expect-error TS can't narrow inside a closure, for some reason
					return getDunderProto(O);
				}
				: null;
	return getProto;
}var hasown;
var hasRequiredHasown;

function requireHasown () {
	if (hasRequiredHasown) return hasown;
	hasRequiredHasown = 1;

	var call = Function.prototype.call;
	var $hasOwn = Object.prototype.hasOwnProperty;
	var bind = requireFunctionBind();

	/** @type {import('.')} */
	hasown = bind.call(call, $hasOwn);
	return hasown;
}var getIntrinsic;
var hasRequiredGetIntrinsic;

function requireGetIntrinsic () {
	if (hasRequiredGetIntrinsic) return getIntrinsic;
	hasRequiredGetIntrinsic = 1;

	var undefined$1;

	var $Object = /*@__PURE__*/ requireEsObjectAtoms();

	var $Error = /*@__PURE__*/ requireEsErrors();
	var $EvalError = /*@__PURE__*/ require_eval();
	var $RangeError = /*@__PURE__*/ requireRange();
	var $ReferenceError = /*@__PURE__*/ requireRef();
	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();
	var $URIError = /*@__PURE__*/ requireUri();

	var abs = /*@__PURE__*/ requireAbs();
	var floor = /*@__PURE__*/ requireFloor();
	var max = /*@__PURE__*/ requireMax();
	var min = /*@__PURE__*/ requireMin();
	var pow = /*@__PURE__*/ requirePow();
	var round = /*@__PURE__*/ requireRound();
	var sign = /*@__PURE__*/ requireSign();

	var $Function = Function;

	// eslint-disable-next-line consistent-return
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) {}
	};

	var $gOPD = /*@__PURE__*/ requireGopd();
	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var throwTypeError = function () {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
				arguments.callee; // IE 8 does not throw here
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;

	var hasSymbols = requireHasSymbols()();

	var getProto = requireGetProto();
	var $ObjectGPO = requireObject_getPrototypeOf();
	var $ReflectGPO = requireReflect_getPrototypeOf();

	var $apply = requireFunctionApply();
	var $call = requireFunctionCall();

	var needsEval = {};

	var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined$1 : getProto(Uint8Array);

	var INTRINSICS = {
		__proto__: null,
		'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
		'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
		'%AsyncFromSyncIteratorPrototype%': undefined$1,
		'%AsyncFunction%': needsEval,
		'%AsyncGenerator%': needsEval,
		'%AsyncGeneratorFunction%': needsEval,
		'%AsyncIteratorPrototype%': needsEval,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
		'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
		'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined$1 : BigInt64Array,
		'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined$1 : BigUint64Array,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': $Error,
		'%eval%': eval, // eslint-disable-line no-eval
		'%EvalError%': $EvalError,
		'%Float16Array%': typeof Float16Array === 'undefined' ? undefined$1 : Float16Array,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
		'%Function%': $Function,
		'%GeneratorFunction%': needsEval,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
		'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': $Object,
		'%Object.getOwnPropertyDescriptor%': $gOPD,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
		'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
		'%RangeError%': $RangeError,
		'%ReferenceError%': $ReferenceError,
		'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
		'%RegExp%': RegExp,
		'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined$1,
		'%Symbol%': hasSymbols ? Symbol : undefined$1,
		'%SyntaxError%': $SyntaxError,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
		'%URIError%': $URIError,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
		'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,

		'%Function.prototype.call%': $call,
		'%Function.prototype.apply%': $apply,
		'%Object.defineProperty%': $defineProperty,
		'%Object.getPrototypeOf%': $ObjectGPO,
		'%Math.abs%': abs,
		'%Math.floor%': floor,
		'%Math.max%': max,
		'%Math.min%': min,
		'%Math.pow%': pow,
		'%Math.round%': round,
		'%Math.sign%': sign,
		'%Reflect.getPrototypeOf%': $ReflectGPO
	};

	if (getProto) {
		try {
			null.error; // eslint-disable-line no-unused-expressions
		} catch (e) {
			// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
			var errorProto = getProto(getProto(e));
			INTRINSICS['%Error.prototype%'] = errorProto;
		}
	}

	var doEval = function doEval(name) {
		var value;
		if (name === '%AsyncFunction%') {
			value = getEvalledConstructor('async function () {}');
		} else if (name === '%GeneratorFunction%') {
			value = getEvalledConstructor('function* () {}');
		} else if (name === '%AsyncGeneratorFunction%') {
			value = getEvalledConstructor('async function* () {}');
		} else if (name === '%AsyncGenerator%') {
			var fn = doEval('%AsyncGeneratorFunction%');
			if (fn) {
				value = fn.prototype;
			}
		} else if (name === '%AsyncIteratorPrototype%') {
			var gen = doEval('%AsyncGenerator%');
			if (gen && getProto) {
				value = getProto(gen.prototype);
			}
		}

		INTRINSICS[name] = value;

		return value;
	};

	var LEGACY_ALIASES = {
		__proto__: null,
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	};

	var bind = requireFunctionBind();
	var hasOwn = /*@__PURE__*/ requireHasown();
	var $concat = bind.call($call, Array.prototype.concat);
	var $spliceApply = bind.call($apply, Array.prototype.splice);
	var $replace = bind.call($call, String.prototype.replace);
	var $strSlice = bind.call($call, String.prototype.slice);
	var $exec = bind.call($call, RegExp.prototype.exec);

	/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === '%' && last !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
		}
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
		});
		return result;
	};
	/* end adaptation */

	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = '%' + alias[0] + '%';
		}

		if (hasOwn(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) {
				value = doEval(intrinsicName);
			}
			if (typeof value === 'undefined' && !allowMissing) {
				throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}

			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}

		throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
	};

	getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError('"allowMissing" argument must be a boolean');
		}

		if ($exec(/^%?[^%]*%?$/, name) === null) {
			throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
		}
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

		var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;

		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}

		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if (
				(
					(first === '"' || first === "'" || first === '`')
					|| (last === '"' || last === "'" || last === '`')
				)
				&& first !== last
			) {
				throw new $SyntaxError('property names with quotes must have matching quotes');
			}
			if (part === 'constructor' || !isOwn) {
				skipFurtherCaching = true;
			}

			intrinsicBaseName += '.' + part;
			intrinsicRealName = '%' + intrinsicBaseName + '%';

			if (hasOwn(INTRINSICS, intrinsicRealName)) {
				value = INTRINSICS[intrinsicRealName];
			} else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) {
						throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					return void undefined$1;
				}
				if ($gOPD && (i + 1) >= parts.length) {
					var desc = $gOPD(value, part);
					isOwn = !!desc;

					// By convention, when a data property is converted to an accessor
					// property to emulate a data property that does not suffer from
					// the override mistake, that accessor's getter is marked with
					// an `originalValue` property. Here, when we detect this, we
					// uphold the illusion by pretending to see that original data
					// property, i.e., returning the value rather than the getter
					// itself.
					if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
						value = desc.get;
					} else {
						value = value[part];
					}
				} else {
					isOwn = hasOwn(value, part);
					value = value[part];
				}

				if (isOwn && !skipFurtherCaching) {
					INTRINSICS[intrinsicRealName] = value;
				}
			}
		}
		return value;
	};
	return getIntrinsic;
}var callBound;
var hasRequiredCallBound;

function requireCallBound () {
	if (hasRequiredCallBound) return callBound;
	hasRequiredCallBound = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic();

	var callBindBasic = requireCallBindApplyHelpers();

	/** @type {(thisArg: string, searchString: string, position?: number) => number} */
	var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

	/** @type {import('.')} */
	callBound = function callBoundIntrinsic(name, allowMissing) {
		/* eslint no-extra-parens: 0 */

		var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBindBasic(/** @type {const} */ ([intrinsic]));
		}
		return intrinsic;
	};
	return callBound;
}var isCallable;
var hasRequiredIsCallable;

function requireIsCallable () {
	if (hasRequiredIsCallable) return isCallable;
	hasRequiredIsCallable = 1;

	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
	var badArrayLike;
	var isCallableMarker;
	if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
		try {
			badArrayLike = Object.defineProperty({}, 'length', {
				get: function () {
					throw isCallableMarker;
				}
			});
			isCallableMarker = {};
			// eslint-disable-next-line no-throw-literal
			reflectApply(function () { throw 42; }, null, badArrayLike);
		} catch (_) {
			if (_ !== isCallableMarker) {
				reflectApply = null;
			}
		}
	} else {
		reflectApply = null;
	}

	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false; // not a function
		}
	};

	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var objectClass = '[object Object]';
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var ddaClass = '[object HTMLAllCollection]'; // IE 11
	var ddaClass2 = '[object HTML document.all class]';
	var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
	var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

	var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

	var isDDA = function isDocumentDotAll() { return false; };
	if (typeof document === 'object') {
		// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
		var all = document.all;
		if (toStr.call(all) === toStr.call(document.all)) {
			isDDA = function isDocumentDotAll(value) {
				/* globals document: false */
				// in IE 6-8, typeof document.all is "object" and it's truthy
				if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
					try {
						var str = toStr.call(value);
						return (
							str === ddaClass
							|| str === ddaClass2
							|| str === ddaClass3 // opera 12.16
							|| str === objectClass // IE 6-8
						) && value('') == null; // eslint-disable-line eqeqeq
					} catch (e) { /**/ }
				}
				return false;
			};
		}
	}

	isCallable = reflectApply
		? function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			try {
				reflectApply(value, null, badArrayLike);
			} catch (e) {
				if (e !== isCallableMarker) { return false; }
			}
			return !isES6ClassFn(value) && tryFunctionObject(value);
		}
		: function isCallable(value) {
			if (isDDA(value)) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (hasToStringTag) { return tryFunctionObject(value); }
			if (isES6ClassFn(value)) { return false; }
			var strClass = toStr.call(value);
			if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
			return tryFunctionObject(value);
		};
	return isCallable;
}var forEach;
var hasRequiredForEach;

function requireForEach () {
	if (hasRequiredForEach) return forEach;
	hasRequiredForEach = 1;

	var isCallable = requireIsCallable();

	var toStr = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
	var forEachArray = function forEachArray(array, iterator, receiver) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            if (receiver == null) {
	                iterator(array[i], i, array);
	            } else {
	                iterator.call(receiver, array[i], i, array);
	            }
	        }
	    }
	};

	/** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
	var forEachString = function forEachString(string, iterator, receiver) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        if (receiver == null) {
	            iterator(string.charAt(i), i, string);
	        } else {
	            iterator.call(receiver, string.charAt(i), i, string);
	        }
	    }
	};

	/** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
	var forEachObject = function forEachObject(object, iterator, receiver) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            if (receiver == null) {
	                iterator(object[k], k, object);
	            } else {
	                iterator.call(receiver, object[k], k, object);
	            }
	        }
	    }
	};

	/** @type {(x: unknown) => x is readonly unknown[]} */
	function isArray(x) {
	    return toStr.call(x) === '[object Array]';
	}

	/** @type {import('.')._internal} */
	forEach = function forEach(list, iterator, thisArg) {
	    if (!isCallable(iterator)) {
	        throw new TypeError('iterator must be a function');
	    }

	    var receiver;
	    if (arguments.length >= 3) {
	        receiver = thisArg;
	    }

	    if (isArray(list)) {
	        forEachArray(list, iterator, receiver);
	    } else if (typeof list === 'string') {
	        forEachString(list, iterator, receiver);
	    } else {
	        forEachObject(list, iterator, receiver);
	    }
	};
	return forEach;
}var possibleTypedArrayNames;
var hasRequiredPossibleTypedArrayNames;

function requirePossibleTypedArrayNames () {
	if (hasRequiredPossibleTypedArrayNames) return possibleTypedArrayNames;
	hasRequiredPossibleTypedArrayNames = 1;

	/** @type {import('.')} */
	possibleTypedArrayNames = [
		'Float16Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Int16Array',
		'Int32Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array'
	];
	return possibleTypedArrayNames;
}var availableTypedArrays;
var hasRequiredAvailableTypedArrays;

function requireAvailableTypedArrays () {
	if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
	hasRequiredAvailableTypedArrays = 1;

	var possibleNames = /*@__PURE__*/ requirePossibleTypedArrayNames();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;

	/** @type {import('.')} */
	availableTypedArrays = function availableTypedArrays() {
		var /** @type {ReturnType<typeof availableTypedArrays>} */ out = [];
		for (var i = 0; i < possibleNames.length; i++) {
			if (typeof g[possibleNames[i]] === 'function') {
				// @ts-expect-error
				out[out.length] = possibleNames[i];
			}
		}
		return out;
	};
	return availableTypedArrays;
}var callBind = {exports: {}};var defineDataProperty;
var hasRequiredDefineDataProperty;

function requireDefineDataProperty () {
	if (hasRequiredDefineDataProperty) return defineDataProperty;
	hasRequiredDefineDataProperty = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var $SyntaxError = /*@__PURE__*/ requireSyntax();
	var $TypeError = /*@__PURE__*/ requireType();

	var gopd = /*@__PURE__*/ requireGopd();

	/** @type {import('.')} */
	defineDataProperty = function defineDataProperty(
		obj,
		property,
		value
	) {
		if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
			throw new $TypeError('`obj` must be an object or a function`');
		}
		if (typeof property !== 'string' && typeof property !== 'symbol') {
			throw new $TypeError('`property` must be a string or a symbol`');
		}
		if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
			throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
			throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
			throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
		}
		if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
			throw new $TypeError('`loose`, if provided, must be a boolean');
		}

		var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
		var nonWritable = arguments.length > 4 ? arguments[4] : null;
		var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
		var loose = arguments.length > 6 ? arguments[6] : false;

		/* @type {false | TypedPropertyDescriptor<unknown>} */
		var desc = !!gopd && gopd(obj, property);

		if ($defineProperty) {
			$defineProperty(obj, property, {
				configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
				enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
				value: value,
				writable: nonWritable === null && desc ? desc.writable : !nonWritable
			});
		} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
			// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
			obj[property] = value; // eslint-disable-line no-param-reassign
		} else {
			throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
		}
	};
	return defineDataProperty;
}var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;

function requireHasPropertyDescriptors () {
	if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
	hasRequiredHasPropertyDescriptors = 1;

	var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

	var hasPropertyDescriptors = function hasPropertyDescriptors() {
		return !!$defineProperty;
	};

	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		// node v0.6 has a bug where array lengths can be Set but not Defined
		if (!$defineProperty) {
			return null;
		}
		try {
			return $defineProperty([], 'length', { value: 1 }).length !== 1;
		} catch (e) {
			// In Firefox 4-22, defining length on an array throws an exception.
			return true;
		}
	};

	hasPropertyDescriptors_1 = hasPropertyDescriptors;
	return hasPropertyDescriptors_1;
}var setFunctionLength;
var hasRequiredSetFunctionLength;

function requireSetFunctionLength () {
	if (hasRequiredSetFunctionLength) return setFunctionLength;
	hasRequiredSetFunctionLength = 1;

	var GetIntrinsic = /*@__PURE__*/ requireGetIntrinsic();
	var define = /*@__PURE__*/ requireDefineDataProperty();
	var hasDescriptors = /*@__PURE__*/ requireHasPropertyDescriptors()();
	var gOPD = /*@__PURE__*/ requireGopd();

	var $TypeError = /*@__PURE__*/ requireType();
	var $floor = GetIntrinsic('%Math.floor%');

	/** @type {import('.')} */
	setFunctionLength = function setFunctionLength(fn, length) {
		if (typeof fn !== 'function') {
			throw new $TypeError('`fn` is not a function');
		}
		if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
			throw new $TypeError('`length` must be a positive 32-bit integer');
		}

		var loose = arguments.length > 2 && !!arguments[2];

		var functionLengthIsConfigurable = true;
		var functionLengthIsWritable = true;
		if ('length' in fn && gOPD) {
			var desc = gOPD(fn, 'length');
			if (desc && !desc.configurable) {
				functionLengthIsConfigurable = false;
			}
			if (desc && !desc.writable) {
				functionLengthIsWritable = false;
			}
		}

		if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
			if (hasDescriptors) {
				define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
			} else {
				define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
			}
		}
		return fn;
	};
	return setFunctionLength;
}var applyBind;
var hasRequiredApplyBind;

function requireApplyBind () {
	if (hasRequiredApplyBind) return applyBind;
	hasRequiredApplyBind = 1;

	var bind = requireFunctionBind();
	var $apply = requireFunctionApply();
	var actualApply = requireActualApply();

	/** @type {import('./applyBind')} */
	applyBind = function applyBind() {
		return actualApply(bind, $apply, arguments);
	};
	return applyBind;
}var hasRequiredCallBind;

function requireCallBind () {
	if (hasRequiredCallBind) return callBind.exports;
	hasRequiredCallBind = 1;
	(function (module) {

		var setFunctionLength = /*@__PURE__*/ requireSetFunctionLength();

		var $defineProperty = /*@__PURE__*/ requireEsDefineProperty();

		var callBindBasic = requireCallBindApplyHelpers();
		var applyBind = requireApplyBind();

		module.exports = function callBind(originalFunction) {
			var func = callBindBasic(arguments);
			var adjustedLength = originalFunction.length - (arguments.length - 1);
			return setFunctionLength(
				func,
				1 + (adjustedLength > 0 ? adjustedLength : 0),
				true
			);
		};

		if ($defineProperty) {
			$defineProperty(module.exports, 'apply', { value: applyBind });
		} else {
			module.exports.apply = applyBind;
		} 
	} (callBind));
	return callBind.exports;
}var shams;
var hasRequiredShams;

function requireShams () {
	if (hasRequiredShams) return shams;
	hasRequiredShams = 1;

	var hasSymbols = requireShams$1();

	/** @type {import('.')} */
	shams = function hasToStringTagShams() {
		return hasSymbols() && !!Symbol.toStringTag;
	};
	return shams;
}var whichTypedArray;
var hasRequiredWhichTypedArray;

function requireWhichTypedArray () {
	if (hasRequiredWhichTypedArray) return whichTypedArray;
	hasRequiredWhichTypedArray = 1;

	var forEach = requireForEach();
	var availableTypedArrays = /*@__PURE__*/ requireAvailableTypedArrays();
	var callBind = requireCallBind();
	var callBound = /*@__PURE__*/ requireCallBound();
	var gOPD = /*@__PURE__*/ requireGopd();
	var getProto = requireGetProto();

	var $toString = callBound('Object.prototype.toString');
	var hasToStringTag = requireShams()();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
	var typedArrays = availableTypedArrays();

	var $slice = callBound('String.prototype.slice');

	/** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
	var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	};

	/** @typedef {import('./types').Getter} Getter */
	/** @type {import('./types').Cache} */
	var cache = { __proto__: null };
	if (hasToStringTag && gOPD && getProto) {
		forEach(typedArrays, function (typedArray) {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr && getProto) {
				var proto = getProto(arr);
				// @ts-expect-error TS won't narrow inside a closure
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor && proto) {
					var superProto = getProto(proto);
					// @ts-expect-error TS won't narrow inside a closure
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				// @ts-expect-error TODO: fix
				cache['$' + typedArray] = callBind(descriptor.get);
			}
		});
	} else {
		forEach(typedArrays, function (typedArray) {
			var arr = new g[typedArray]();
			var fn = arr.slice || arr.set;
			if (fn) {
				cache[
					/** @type {`$${import('.').TypedArrayName}`} */ ('$' + typedArray)
				] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */ (
					// @ts-expect-error TODO FIXME
					callBind(fn)
				);
			}
		});
	}

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var tryTypedArrays = function tryAllTypedArrays(value) {
		/** @type {ReturnType<typeof tryAllTypedArrays>} */ var found = false;
		forEach(
			/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */ (cache),
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
			function (getter, typedArray) {
				if (!found) {
					try {
						// @ts-expect-error a throw is fine here
						if ('$' + getter(value) === typedArray) {
							found = /** @type {import('.').TypedArrayName} */ ($slice(typedArray, 1));
						}
					} catch (e) { /**/ }
				}
			}
		);
		return found;
	};

	/** @type {(value: object) => false | import('.').TypedArrayName} */
	var trySlices = function tryAllSlices(value) {
		/** @type {ReturnType<typeof tryAllSlices>} */ var found = false;
		forEach(
			/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */(cache),
			/** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function (getter, name) {
				if (!found) {
					try {
						// @ts-expect-error a throw is fine here
						getter(value);
						found = /** @type {import('.').TypedArrayName} */ ($slice(name, 1));
					} catch (e) { /**/ }
				}
			}
		);
		return found;
	};

	/** @type {import('.')} */
	whichTypedArray = function whichTypedArray(value) {
		if (!value || typeof value !== 'object') { return false; }
		if (!hasToStringTag) {
			/** @type {string} */
			var tag = $slice($toString(value), 8, -1);
			if ($indexOf(typedArrays, tag) > -1) {
				return tag;
			}
			if (tag !== 'Object') {
				return false;
			}
			// node < 0.6 hits here on real Typed Arrays
			return trySlices(value);
		}
		if (!gOPD) { return null; } // unknown engine
		return tryTypedArrays(value);
	};
	return whichTypedArray;
}var isTypedArray;
var hasRequiredIsTypedArray;

function requireIsTypedArray () {
	if (hasRequiredIsTypedArray) return isTypedArray;
	hasRequiredIsTypedArray = 1;

	var whichTypedArray = /*@__PURE__*/ requireWhichTypedArray();

	/** @type {import('.')} */
	isTypedArray = function isTypedArray(value) {
		return !!whichTypedArray(value);
	};
	return isTypedArray;
}var typedArrayBuffer;
var hasRequiredTypedArrayBuffer;

function requireTypedArrayBuffer () {
	if (hasRequiredTypedArrayBuffer) return typedArrayBuffer;
	hasRequiredTypedArrayBuffer = 1;

	var $TypeError = /*@__PURE__*/ requireType();

	var callBound = /*@__PURE__*/ requireCallBound();

	/** @type {undefined | ((thisArg: import('.').TypedArray) => Buffer<ArrayBufferLike>)} */
	var $typedArrayBuffer = callBound('TypedArray.prototype.buffer', true);

	var isTypedArray = /*@__PURE__*/ requireIsTypedArray();

	/** @type {import('.')} */
	// node <= 0.10, < 0.11.4 has a nonconfigurable own property instead of a prototype getter
	typedArrayBuffer = $typedArrayBuffer || function typedArrayBuffer(x) {
		if (!isTypedArray(x)) {
			throw new $TypeError('Not a Typed Array');
		}
		return x.buffer;
	};
	return typedArrayBuffer;
}var toBuffer;
var hasRequiredToBuffer;

function requireToBuffer () {
	if (hasRequiredToBuffer) return toBuffer;
	hasRequiredToBuffer = 1;

	var Buffer = requireSafeBuffer().Buffer;
	var isArray = requireIsarray();
	var typedArrayBuffer = /*@__PURE__*/ requireTypedArrayBuffer();

	var isView = ArrayBuffer.isView || function isView(obj) {
		try {
			typedArrayBuffer(obj);
			return true;
		} catch (e) {
			return false;
		}
	};

	var useUint8Array = typeof Uint8Array !== 'undefined';
	var useArrayBuffer = typeof ArrayBuffer !== 'undefined'
		&& typeof Uint8Array !== 'undefined';
	var useFromArrayBuffer = useArrayBuffer && (Buffer.prototype instanceof Uint8Array || Buffer.TYPED_ARRAY_SUPPORT);

	toBuffer = function toBuffer(data, encoding) {
		if (Buffer.isBuffer(data)) {
			if (data.constructor && !('isBuffer' in data)) {
				// probably a SlowBuffer
				return Buffer.from(data);
			}
			return data;
		}

		if (typeof data === 'string') {
			return Buffer.from(data, encoding);
		}

		/*
		 * Wrap any TypedArray instances and DataViews
		 * Makes sense only on engines with full TypedArray support -- let Buffer detect that
		 */
		if (useArrayBuffer && isView(data)) {
			// Bug in Node.js <6.3.1, which treats this as out-of-bounds
			if (data.byteLength === 0) {
				return Buffer.alloc(0);
			}

			// When Buffer is based on Uint8Array, we can just construct it from ArrayBuffer
			if (useFromArrayBuffer) {
				var res = Buffer.from(data.buffer, data.byteOffset, data.byteLength);
				/*
				 * Recheck result size, as offset/length doesn't work on Node.js <5.10
				 * We just go to Uint8Array case if this fails
				 */
				if (res.byteLength === data.byteLength) {
					return res;
				}
			}

			// Convert to Uint8Array bytes and then to Buffer
			var uint8 = data instanceof Uint8Array ? data : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
			var result = Buffer.from(uint8);

			/*
			 * Let's recheck that conversion succeeded
			 * We have .length but not .byteLength when useFromArrayBuffer is false
			 */
			if (result.length === data.byteLength) {
				return result;
			}
		}

		/*
		 * Uint8Array in engines where Buffer.from might not work with ArrayBuffer, just copy over
		 * Doesn't make sense with other TypedArray instances
		 */
		if (useUint8Array && data instanceof Uint8Array) {
			return Buffer.from(data);
		}

		var isArr = isArray(data);
		if (isArr) {
			for (var i = 0; i < data.length; i += 1) {
				var x = data[i];
				if (
					typeof x !== 'number'
					|| x < 0
					|| x > 255
					|| ~~x !== x // NaN and integer check
				) {
					throw new RangeError('Array items must be numbers in the range 0-255.');
				}
			}
		}

		/*
		 * Old Buffer polyfill on an engine that doesn't have TypedArray support
		 * Also, this is from a different Buffer polyfill implementation then we have, as instanceof check failed
		 * Convert to our current Buffer implementation
		 */
		if (
			isArr || (
				Buffer.isBuffer(data)
				&& data.constructor
				&& typeof data.constructor.isBuffer === 'function'
				&& data.constructor.isBuffer(data)
			)
		) {
			return Buffer.from(data);
		}

		throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.');
	};
	return toBuffer;
}var hash;
var hasRequiredHash;

function requireHash () {
	if (hasRequiredHash) return hash;
	hasRequiredHash = 1;

	var Buffer = requireSafeBuffer().Buffer;
	var toBuffer = /*@__PURE__*/ requireToBuffer();

	// prototype class for hash functions
	function Hash(blockSize, finalSize) {
		this._block = Buffer.alloc(blockSize);
		this._finalSize = finalSize;
		this._blockSize = blockSize;
		this._len = 0;
	}

	Hash.prototype.update = function (data, enc) {
		/* eslint no-param-reassign: 0 */
		data = toBuffer(data, enc || 'utf8');

		var block = this._block;
		var blockSize = this._blockSize;
		var length = data.length;
		var accum = this._len;

		for (var offset = 0; offset < length;) {
			var assigned = accum % blockSize;
			var remainder = Math.min(length - offset, blockSize - assigned);

			for (var i = 0; i < remainder; i++) {
				block[assigned + i] = data[offset + i];
			}

			accum += remainder;
			offset += remainder;

			if ((accum % blockSize) === 0) {
				this._update(block);
			}
		}

		this._len += length;
		return this;
	};

	Hash.prototype.digest = function (enc) {
		var rem = this._len % this._blockSize;

		this._block[rem] = 0x80;

		/*
		 * zero (rem + 1) trailing bits, where (rem + 1) is the smallest
		 * non-negative solution to the equation (length + 1 + (rem + 1)) === finalSize mod blockSize
		 */
		this._block.fill(0, rem + 1);

		if (rem >= this._finalSize) {
			this._update(this._block);
			this._block.fill(0);
		}

		var bits = this._len * 8;

		// uint32
		if (bits <= 0xffffffff) {
			this._block.writeUInt32BE(bits, this._blockSize - 4);

			// uint64
		} else {
			var lowBits = (bits & 0xffffffff) >>> 0;
			var highBits = (bits - lowBits) / 0x100000000;

			this._block.writeUInt32BE(highBits, this._blockSize - 8);
			this._block.writeUInt32BE(lowBits, this._blockSize - 4);
		}

		this._update(this._block);
		var hash = this._hash();

		return enc ? hash.toString(enc) : hash;
	};

	Hash.prototype._update = function () {
		throw new Error('_update must be implemented by subclass');
	};

	hash = Hash;
	return hash;
}var sha$1;
var hasRequiredSha;

function requireSha () {
	if (hasRequiredSha) return sha$1;
	hasRequiredSha = 1;

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
	 * in FIPS PUB 180-1
	 * This source code is derived from sha1.js of the same repository.
	 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
	 * operation was added.
	 */

	var inherits = requireInherits();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var K = [
		0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
	];

	var W = new Array(80);

	function Sha() {
		this.init();
		this._w = W;

		Hash.call(this, 64, 56);
	}

	inherits(Sha, Hash);

	Sha.prototype.init = function () {
		this._a = 0x67452301;
		this._b = 0xefcdab89;
		this._c = 0x98badcfe;
		this._d = 0x10325476;
		this._e = 0xc3d2e1f0;

		return this;
	};

	function rotl5(num) {
		return (num << 5) | (num >>> 27);
	}

	function rotl30(num) {
		return (num << 30) | (num >>> 2);
	}

	function ft(s, b, c, d) {
		if (s === 0) {
			return (b & c) | (~b & d);
		}
		if (s === 2) {
			return (b & c) | (b & d) | (c & d);
		}
		return b ^ c ^ d;
	}

	Sha.prototype._update = function (M) {
		var w = this._w;

		var a = this._a | 0;
		var b = this._b | 0;
		var c = this._c | 0;
		var d = this._d | 0;
		var e = this._e | 0;

		for (var i = 0; i < 16; ++i) {
			w[i] = M.readInt32BE(i * 4);
		}
		for (; i < 80; ++i) {
			w[i] = w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16];
		}

		for (var j = 0; j < 80; ++j) {
			var s = ~~(j / 20);
			var t = (rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s]) | 0;

			e = d;
			d = c;
			c = rotl30(b);
			b = a;
			a = t;
		}

		this._a = (a + this._a) | 0;
		this._b = (b + this._b) | 0;
		this._c = (c + this._c) | 0;
		this._d = (d + this._d) | 0;
		this._e = (e + this._e) | 0;
	};

	Sha.prototype._hash = function () {
		var H = Buffer.allocUnsafe(20);

		H.writeInt32BE(this._a | 0, 0);
		H.writeInt32BE(this._b | 0, 4);
		H.writeInt32BE(this._c | 0, 8);
		H.writeInt32BE(this._d | 0, 12);
		H.writeInt32BE(this._e | 0, 16);

		return H;
	};

	sha$1 = Sha;
	return sha$1;
}var sha1$1;
var hasRequiredSha1;

function requireSha1 () {
	if (hasRequiredSha1) return sha1$1;
	hasRequiredSha1 = 1;

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = requireInherits();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var K = [
		0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0
	];

	var W = new Array(80);

	function Sha1() {
		this.init();
		this._w = W;

		Hash.call(this, 64, 56);
	}

	inherits(Sha1, Hash);

	Sha1.prototype.init = function () {
		this._a = 0x67452301;
		this._b = 0xefcdab89;
		this._c = 0x98badcfe;
		this._d = 0x10325476;
		this._e = 0xc3d2e1f0;

		return this;
	};

	function rotl1(num) {
		return (num << 1) | (num >>> 31);
	}

	function rotl5(num) {
		return (num << 5) | (num >>> 27);
	}

	function rotl30(num) {
		return (num << 30) | (num >>> 2);
	}

	function ft(s, b, c, d) {
		if (s === 0) {
			return (b & c) | (~b & d);
		}
		if (s === 2) {
			return (b & c) | (b & d) | (c & d);
		}
		return b ^ c ^ d;
	}

	Sha1.prototype._update = function (M) {
		var w = this._w;

		var a = this._a | 0;
		var b = this._b | 0;
		var c = this._c | 0;
		var d = this._d | 0;
		var e = this._e | 0;

		for (var i = 0; i < 16; ++i) {
			w[i] = M.readInt32BE(i * 4);
		}
		for (; i < 80; ++i) {
			w[i] = rotl1(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16]);
		}

		for (var j = 0; j < 80; ++j) {
			var s = ~~(j / 20);
			var t = (rotl5(a) + ft(s, b, c, d) + e + w[j] + K[s]) | 0;

			e = d;
			d = c;
			c = rotl30(b);
			b = a;
			a = t;
		}

		this._a = (a + this._a) | 0;
		this._b = (b + this._b) | 0;
		this._c = (c + this._c) | 0;
		this._d = (d + this._d) | 0;
		this._e = (e + this._e) | 0;
	};

	Sha1.prototype._hash = function () {
		var H = Buffer.allocUnsafe(20);

		H.writeInt32BE(this._a | 0, 0);
		H.writeInt32BE(this._b | 0, 4);
		H.writeInt32BE(this._c | 0, 8);
		H.writeInt32BE(this._d | 0, 12);
		H.writeInt32BE(this._e | 0, 16);

		return H;
	};

	sha1$1 = Sha1;
	return sha1$1;
}var sha256$1;
var hasRequiredSha256;

function requireSha256 () {
	if (hasRequiredSha256) return sha256$1;
	hasRequiredSha256 = 1;

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = requireInherits();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var K = [
		0x428A2F98,
		0x71374491,
		0xB5C0FBCF,
		0xE9B5DBA5,
		0x3956C25B,
		0x59F111F1,
		0x923F82A4,
		0xAB1C5ED5,
		0xD807AA98,
		0x12835B01,
		0x243185BE,
		0x550C7DC3,
		0x72BE5D74,
		0x80DEB1FE,
		0x9BDC06A7,
		0xC19BF174,
		0xE49B69C1,
		0xEFBE4786,
		0x0FC19DC6,
		0x240CA1CC,
		0x2DE92C6F,
		0x4A7484AA,
		0x5CB0A9DC,
		0x76F988DA,
		0x983E5152,
		0xA831C66D,
		0xB00327C8,
		0xBF597FC7,
		0xC6E00BF3,
		0xD5A79147,
		0x06CA6351,
		0x14292967,
		0x27B70A85,
		0x2E1B2138,
		0x4D2C6DFC,
		0x53380D13,
		0x650A7354,
		0x766A0ABB,
		0x81C2C92E,
		0x92722C85,
		0xA2BFE8A1,
		0xA81A664B,
		0xC24B8B70,
		0xC76C51A3,
		0xD192E819,
		0xD6990624,
		0xF40E3585,
		0x106AA070,
		0x19A4C116,
		0x1E376C08,
		0x2748774C,
		0x34B0BCB5,
		0x391C0CB3,
		0x4ED8AA4A,
		0x5B9CCA4F,
		0x682E6FF3,
		0x748F82EE,
		0x78A5636F,
		0x84C87814,
		0x8CC70208,
		0x90BEFFFA,
		0xA4506CEB,
		0xBEF9A3F7,
		0xC67178F2
	];

	var W = new Array(64);

	function Sha256() {
		this.init();

		this._w = W; // new Array(64)

		Hash.call(this, 64, 56);
	}

	inherits(Sha256, Hash);

	Sha256.prototype.init = function () {
		this._a = 0x6a09e667;
		this._b = 0xbb67ae85;
		this._c = 0x3c6ef372;
		this._d = 0xa54ff53a;
		this._e = 0x510e527f;
		this._f = 0x9b05688c;
		this._g = 0x1f83d9ab;
		this._h = 0x5be0cd19;

		return this;
	};

	function ch(x, y, z) {
		return z ^ (x & (y ^ z));
	}

	function maj(x, y, z) {
		return (x & y) | (z & (x | y));
	}

	function sigma0(x) {
		return ((x >>> 2) | (x << 30)) ^ ((x >>> 13) | (x << 19)) ^ ((x >>> 22) | (x << 10));
	}

	function sigma1(x) {
		return ((x >>> 6) | (x << 26)) ^ ((x >>> 11) | (x << 21)) ^ ((x >>> 25) | (x << 7));
	}

	function gamma0(x) {
		return ((x >>> 7) | (x << 25)) ^ ((x >>> 18) | (x << 14)) ^ (x >>> 3);
	}

	function gamma1(x) {
		return ((x >>> 17) | (x << 15)) ^ ((x >>> 19) | (x << 13)) ^ (x >>> 10);
	}

	Sha256.prototype._update = function (M) {
		var w = this._w;

		var a = this._a | 0;
		var b = this._b | 0;
		var c = this._c | 0;
		var d = this._d | 0;
		var e = this._e | 0;
		var f = this._f | 0;
		var g = this._g | 0;
		var h = this._h | 0;

		for (var i = 0; i < 16; ++i) {
			w[i] = M.readInt32BE(i * 4);
		}
		for (; i < 64; ++i) {
			w[i] = (gamma1(w[i - 2]) + w[i - 7] + gamma0(w[i - 15]) + w[i - 16]) | 0;
		}

		for (var j = 0; j < 64; ++j) {
			var T1 = (h + sigma1(e) + ch(e, f, g) + K[j] + w[j]) | 0;
			var T2 = (sigma0(a) + maj(a, b, c)) | 0;

			h = g;
			g = f;
			f = e;
			e = (d + T1) | 0;
			d = c;
			c = b;
			b = a;
			a = (T1 + T2) | 0;
		}

		this._a = (a + this._a) | 0;
		this._b = (b + this._b) | 0;
		this._c = (c + this._c) | 0;
		this._d = (d + this._d) | 0;
		this._e = (e + this._e) | 0;
		this._f = (f + this._f) | 0;
		this._g = (g + this._g) | 0;
		this._h = (h + this._h) | 0;
	};

	Sha256.prototype._hash = function () {
		var H = Buffer.allocUnsafe(32);

		H.writeInt32BE(this._a, 0);
		H.writeInt32BE(this._b, 4);
		H.writeInt32BE(this._c, 8);
		H.writeInt32BE(this._d, 12);
		H.writeInt32BE(this._e, 16);
		H.writeInt32BE(this._f, 20);
		H.writeInt32BE(this._g, 24);
		H.writeInt32BE(this._h, 28);

		return H;
	};

	sha256$1 = Sha256;
	return sha256$1;
}var sha224;
var hasRequiredSha224;

function requireSha224 () {
	if (hasRequiredSha224) return sha224;
	hasRequiredSha224 = 1;

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = requireInherits();
	var Sha256 = requireSha256();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var W = new Array(64);

	function Sha224() {
		this.init();

		this._w = W; // new Array(64)

		Hash.call(this, 64, 56);
	}

	inherits(Sha224, Sha256);

	Sha224.prototype.init = function () {
		this._a = 0xc1059ed8;
		this._b = 0x367cd507;
		this._c = 0x3070dd17;
		this._d = 0xf70e5939;
		this._e = 0xffc00b31;
		this._f = 0x68581511;
		this._g = 0x64f98fa7;
		this._h = 0xbefa4fa4;

		return this;
	};

	Sha224.prototype._hash = function () {
		var H = Buffer.allocUnsafe(28);

		H.writeInt32BE(this._a, 0);
		H.writeInt32BE(this._b, 4);
		H.writeInt32BE(this._c, 8);
		H.writeInt32BE(this._d, 12);
		H.writeInt32BE(this._e, 16);
		H.writeInt32BE(this._f, 20);
		H.writeInt32BE(this._g, 24);

		return H;
	};

	sha224 = Sha224;
	return sha224;
}var sha512;
var hasRequiredSha512;

function requireSha512 () {
	if (hasRequiredSha512) return sha512;
	hasRequiredSha512 = 1;

	var inherits = requireInherits();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var K = [
		0x428a2f98,
		0xd728ae22,
		0x71374491,
		0x23ef65cd,
		0xb5c0fbcf,
		0xec4d3b2f,
		0xe9b5dba5,
		0x8189dbbc,
		0x3956c25b,
		0xf348b538,
		0x59f111f1,
		0xb605d019,
		0x923f82a4,
		0xaf194f9b,
		0xab1c5ed5,
		0xda6d8118,
		0xd807aa98,
		0xa3030242,
		0x12835b01,
		0x45706fbe,
		0x243185be,
		0x4ee4b28c,
		0x550c7dc3,
		0xd5ffb4e2,
		0x72be5d74,
		0xf27b896f,
		0x80deb1fe,
		0x3b1696b1,
		0x9bdc06a7,
		0x25c71235,
		0xc19bf174,
		0xcf692694,
		0xe49b69c1,
		0x9ef14ad2,
		0xefbe4786,
		0x384f25e3,
		0x0fc19dc6,
		0x8b8cd5b5,
		0x240ca1cc,
		0x77ac9c65,
		0x2de92c6f,
		0x592b0275,
		0x4a7484aa,
		0x6ea6e483,
		0x5cb0a9dc,
		0xbd41fbd4,
		0x76f988da,
		0x831153b5,
		0x983e5152,
		0xee66dfab,
		0xa831c66d,
		0x2db43210,
		0xb00327c8,
		0x98fb213f,
		0xbf597fc7,
		0xbeef0ee4,
		0xc6e00bf3,
		0x3da88fc2,
		0xd5a79147,
		0x930aa725,
		0x06ca6351,
		0xe003826f,
		0x14292967,
		0x0a0e6e70,
		0x27b70a85,
		0x46d22ffc,
		0x2e1b2138,
		0x5c26c926,
		0x4d2c6dfc,
		0x5ac42aed,
		0x53380d13,
		0x9d95b3df,
		0x650a7354,
		0x8baf63de,
		0x766a0abb,
		0x3c77b2a8,
		0x81c2c92e,
		0x47edaee6,
		0x92722c85,
		0x1482353b,
		0xa2bfe8a1,
		0x4cf10364,
		0xa81a664b,
		0xbc423001,
		0xc24b8b70,
		0xd0f89791,
		0xc76c51a3,
		0x0654be30,
		0xd192e819,
		0xd6ef5218,
		0xd6990624,
		0x5565a910,
		0xf40e3585,
		0x5771202a,
		0x106aa070,
		0x32bbd1b8,
		0x19a4c116,
		0xb8d2d0c8,
		0x1e376c08,
		0x5141ab53,
		0x2748774c,
		0xdf8eeb99,
		0x34b0bcb5,
		0xe19b48a8,
		0x391c0cb3,
		0xc5c95a63,
		0x4ed8aa4a,
		0xe3418acb,
		0x5b9cca4f,
		0x7763e373,
		0x682e6ff3,
		0xd6b2b8a3,
		0x748f82ee,
		0x5defb2fc,
		0x78a5636f,
		0x43172f60,
		0x84c87814,
		0xa1f0ab72,
		0x8cc70208,
		0x1a6439ec,
		0x90befffa,
		0x23631e28,
		0xa4506ceb,
		0xde82bde9,
		0xbef9a3f7,
		0xb2c67915,
		0xc67178f2,
		0xe372532b,
		0xca273ece,
		0xea26619c,
		0xd186b8c7,
		0x21c0c207,
		0xeada7dd6,
		0xcde0eb1e,
		0xf57d4f7f,
		0xee6ed178,
		0x06f067aa,
		0x72176fba,
		0x0a637dc5,
		0xa2c898a6,
		0x113f9804,
		0xbef90dae,
		0x1b710b35,
		0x131c471b,
		0x28db77f5,
		0x23047d84,
		0x32caab7b,
		0x40c72493,
		0x3c9ebe0a,
		0x15c9bebc,
		0x431d67c4,
		0x9c100d4c,
		0x4cc5d4be,
		0xcb3e42b6,
		0x597f299c,
		0xfc657e2a,
		0x5fcb6fab,
		0x3ad6faec,
		0x6c44198c,
		0x4a475817
	];

	var W = new Array(160);

	function Sha512() {
		this.init();
		this._w = W;

		Hash.call(this, 128, 112);
	}

	inherits(Sha512, Hash);

	Sha512.prototype.init = function () {
		this._ah = 0x6a09e667;
		this._bh = 0xbb67ae85;
		this._ch = 0x3c6ef372;
		this._dh = 0xa54ff53a;
		this._eh = 0x510e527f;
		this._fh = 0x9b05688c;
		this._gh = 0x1f83d9ab;
		this._hh = 0x5be0cd19;

		this._al = 0xf3bcc908;
		this._bl = 0x84caa73b;
		this._cl = 0xfe94f82b;
		this._dl = 0x5f1d36f1;
		this._el = 0xade682d1;
		this._fl = 0x2b3e6c1f;
		this._gl = 0xfb41bd6b;
		this._hl = 0x137e2179;

		return this;
	};

	function Ch(x, y, z) {
		return z ^ (x & (y ^ z));
	}

	function maj(x, y, z) {
		return (x & y) | (z & (x | y));
	}

	function sigma0(x, xl) {
		return ((x >>> 28) | (xl << 4)) ^ ((xl >>> 2) | (x << 30)) ^ ((xl >>> 7) | (x << 25));
	}

	function sigma1(x, xl) {
		return ((x >>> 14) | (xl << 18)) ^ ((x >>> 18) | (xl << 14)) ^ ((xl >>> 9) | (x << 23));
	}

	function Gamma0(x, xl) {
		return ((x >>> 1) | (xl << 31)) ^ ((x >>> 8) | (xl << 24)) ^ (x >>> 7);
	}

	function Gamma0l(x, xl) {
		return ((x >>> 1) | (xl << 31)) ^ ((x >>> 8) | (xl << 24)) ^ ((x >>> 7) | (xl << 25));
	}

	function Gamma1(x, xl) {
		return ((x >>> 19) | (xl << 13)) ^ ((xl >>> 29) | (x << 3)) ^ (x >>> 6);
	}

	function Gamma1l(x, xl) {
		return ((x >>> 19) | (xl << 13)) ^ ((xl >>> 29) | (x << 3)) ^ ((x >>> 6) | (xl << 26));
	}

	function getCarry(a, b) {
		return (a >>> 0) < (b >>> 0) ? 1 : 0;
	}

	Sha512.prototype._update = function (M) {
		var w = this._w;

		var ah = this._ah | 0;
		var bh = this._bh | 0;
		var ch = this._ch | 0;
		var dh = this._dh | 0;
		var eh = this._eh | 0;
		var fh = this._fh | 0;
		var gh = this._gh | 0;
		var hh = this._hh | 0;

		var al = this._al | 0;
		var bl = this._bl | 0;
		var cl = this._cl | 0;
		var dl = this._dl | 0;
		var el = this._el | 0;
		var fl = this._fl | 0;
		var gl = this._gl | 0;
		var hl = this._hl | 0;

		for (var i = 0; i < 32; i += 2) {
			w[i] = M.readInt32BE(i * 4);
			w[i + 1] = M.readInt32BE((i * 4) + 4);
		}
		for (; i < 160; i += 2) {
			var xh = w[i - (15 * 2)];
			var xl = w[i - (15 * 2) + 1];
			var gamma0 = Gamma0(xh, xl);
			var gamma0l = Gamma0l(xl, xh);

			xh = w[i - (2 * 2)];
			xl = w[i - (2 * 2) + 1];
			var gamma1 = Gamma1(xh, xl);
			var gamma1l = Gamma1l(xl, xh);

			// w[i] = gamma0 + w[i - 7] + gamma1 + w[i - 16]
			var Wi7h = w[i - (7 * 2)];
			var Wi7l = w[i - (7 * 2) + 1];

			var Wi16h = w[i - (16 * 2)];
			var Wi16l = w[i - (16 * 2) + 1];

			var Wil = (gamma0l + Wi7l) | 0;
			var Wih = (gamma0 + Wi7h + getCarry(Wil, gamma0l)) | 0;
			Wil = (Wil + gamma1l) | 0;
			Wih = (Wih + gamma1 + getCarry(Wil, gamma1l)) | 0;
			Wil = (Wil + Wi16l) | 0;
			Wih = (Wih + Wi16h + getCarry(Wil, Wi16l)) | 0;

			w[i] = Wih;
			w[i + 1] = Wil;
		}

		for (var j = 0; j < 160; j += 2) {
			Wih = w[j];
			Wil = w[j + 1];

			var majh = maj(ah, bh, ch);
			var majl = maj(al, bl, cl);

			var sigma0h = sigma0(ah, al);
			var sigma0l = sigma0(al, ah);
			var sigma1h = sigma1(eh, el);
			var sigma1l = sigma1(el, eh);

			// t1 = h + sigma1 + ch + K[j] + w[j]
			var Kih = K[j];
			var Kil = K[j + 1];

			var chh = Ch(eh, fh, gh);
			var chl = Ch(el, fl, gl);

			var t1l = (hl + sigma1l) | 0;
			var t1h = (hh + sigma1h + getCarry(t1l, hl)) | 0;
			t1l = (t1l + chl) | 0;
			t1h = (t1h + chh + getCarry(t1l, chl)) | 0;
			t1l = (t1l + Kil) | 0;
			t1h = (t1h + Kih + getCarry(t1l, Kil)) | 0;
			t1l = (t1l + Wil) | 0;
			t1h = (t1h + Wih + getCarry(t1l, Wil)) | 0;

			// t2 = sigma0 + maj
			var t2l = (sigma0l + majl) | 0;
			var t2h = (sigma0h + majh + getCarry(t2l, sigma0l)) | 0;

			hh = gh;
			hl = gl;
			gh = fh;
			gl = fl;
			fh = eh;
			fl = el;
			el = (dl + t1l) | 0;
			eh = (dh + t1h + getCarry(el, dl)) | 0;
			dh = ch;
			dl = cl;
			ch = bh;
			cl = bl;
			bh = ah;
			bl = al;
			al = (t1l + t2l) | 0;
			ah = (t1h + t2h + getCarry(al, t1l)) | 0;
		}

		this._al = (this._al + al) | 0;
		this._bl = (this._bl + bl) | 0;
		this._cl = (this._cl + cl) | 0;
		this._dl = (this._dl + dl) | 0;
		this._el = (this._el + el) | 0;
		this._fl = (this._fl + fl) | 0;
		this._gl = (this._gl + gl) | 0;
		this._hl = (this._hl + hl) | 0;

		this._ah = (this._ah + ah + getCarry(this._al, al)) | 0;
		this._bh = (this._bh + bh + getCarry(this._bl, bl)) | 0;
		this._ch = (this._ch + ch + getCarry(this._cl, cl)) | 0;
		this._dh = (this._dh + dh + getCarry(this._dl, dl)) | 0;
		this._eh = (this._eh + eh + getCarry(this._el, el)) | 0;
		this._fh = (this._fh + fh + getCarry(this._fl, fl)) | 0;
		this._gh = (this._gh + gh + getCarry(this._gl, gl)) | 0;
		this._hh = (this._hh + hh + getCarry(this._hl, hl)) | 0;
	};

	Sha512.prototype._hash = function () {
		var H = Buffer.allocUnsafe(64);

		function writeInt64BE(h, l, offset) {
			H.writeInt32BE(h, offset);
			H.writeInt32BE(l, offset + 4);
		}

		writeInt64BE(this._ah, this._al, 0);
		writeInt64BE(this._bh, this._bl, 8);
		writeInt64BE(this._ch, this._cl, 16);
		writeInt64BE(this._dh, this._dl, 24);
		writeInt64BE(this._eh, this._el, 32);
		writeInt64BE(this._fh, this._fl, 40);
		writeInt64BE(this._gh, this._gl, 48);
		writeInt64BE(this._hh, this._hl, 56);

		return H;
	};

	sha512 = Sha512;
	return sha512;
}var sha384;
var hasRequiredSha384;

function requireSha384 () {
	if (hasRequiredSha384) return sha384;
	hasRequiredSha384 = 1;

	var inherits = requireInherits();
	var SHA512 = requireSha512();
	var Hash = requireHash();
	var Buffer = requireSafeBuffer().Buffer;

	var W = new Array(160);

	function Sha384() {
		this.init();
		this._w = W;

		Hash.call(this, 128, 112);
	}

	inherits(Sha384, SHA512);

	Sha384.prototype.init = function () {
		this._ah = 0xcbbb9d5d;
		this._bh = 0x629a292a;
		this._ch = 0x9159015a;
		this._dh = 0x152fecd8;
		this._eh = 0x67332667;
		this._fh = 0x8eb44a87;
		this._gh = 0xdb0c2e0d;
		this._hh = 0x47b5481d;

		this._al = 0xc1059ed8;
		this._bl = 0x367cd507;
		this._cl = 0x3070dd17;
		this._dl = 0xf70e5939;
		this._el = 0xffc00b31;
		this._fl = 0x68581511;
		this._gl = 0x64f98fa7;
		this._hl = 0xbefa4fa4;

		return this;
	};

	Sha384.prototype._hash = function () {
		var H = Buffer.allocUnsafe(48);

		function writeInt64BE(h, l, offset) {
			H.writeInt32BE(h, offset);
			H.writeInt32BE(l, offset + 4);
		}

		writeInt64BE(this._ah, this._al, 0);
		writeInt64BE(this._bh, this._bl, 8);
		writeInt64BE(this._ch, this._cl, 16);
		writeInt64BE(this._dh, this._dl, 24);
		writeInt64BE(this._eh, this._el, 32);
		writeInt64BE(this._fh, this._fl, 40);

		return H;
	};

	sha384 = Sha384;
	return sha384;
}var hasRequiredSha_js;

function requireSha_js () {
	if (hasRequiredSha_js) return sha_js.exports;
	hasRequiredSha_js = 1;
	(function (module) {

		module.exports = function SHA(algorithm) {
			var alg = algorithm.toLowerCase();

			var Algorithm = module.exports[alg];
			if (!Algorithm) {
				throw new Error(alg + ' is not supported (we accept pull requests)');
			}

			return new Algorithm();
		};

		module.exports.sha = requireSha();
		module.exports.sha1 = requireSha1();
		module.exports.sha224 = requireSha224();
		module.exports.sha256 = requireSha256();
		module.exports.sha384 = requireSha384();
		module.exports.sha512 = requireSha512(); 
	} (sha_js));
	return sha_js.exports;
}var sha_jsExports = requireSha_js();
var sha = /*@__PURE__*/getDefaultExportFromCjs(sha_jsExports);function sha1(text, encoding = 'hex') {
    return sha('sha1').update(utf8.encode(text)).digest(encoding);
}function sha256(text, encoding = 'hex') {
    return sha('sha256').update(utf8.encode(text)).digest(encoding);
}var index = {
    md5,
    base64,
    sha1,
    sha256,
};exports.base64=base64;exports.default=index;exports.md5=md5;exports.sha1=sha1;exports.sha256=sha256;