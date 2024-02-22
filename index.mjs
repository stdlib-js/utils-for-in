// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function e(e,o,s){var n;if("object"!=typeof e||null===e)throw new TypeError(t("1Tz3L",e));if(!r(o))throw new TypeError(t("1Tz2H",o));for(n in e)if(!1===o.call(s,e[n],n,e))return e;return e}export{e as default};
//# sourceMappingURL=index.mjs.map
