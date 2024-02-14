// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function r(r,n,i){var s;if("object"!=typeof r||null===r)throw new TypeError(e("invalid argument. First argument must be an object. Value: `%s`.",r));if(!t(n))throw new TypeError(e("invalid argument. Second argument must be a function. Value: `%s`.",n));for(s in r)if(!1===n.call(i,r[s],s,r))return r;return r}export{r as default};
//# sourceMappingURL=index.mjs.map
