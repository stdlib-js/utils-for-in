// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=t,n=r;var i=function(t,r,i){var s;if("object"!=typeof t||null===t)throw new TypeError(n("invalid argument. First argument must be an object. Value: `%s`.",t));if(!e(r))throw new TypeError(n("invalid argument. Second argument must be a function. Value: `%s`.",r));for(s in t)if(!1===r.call(i,t[s],s,t))return t;return t};export{i as default};
//# sourceMappingURL=index.mjs.map
