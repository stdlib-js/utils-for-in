<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# forIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function for each own and inherited enumerable property of an object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import forIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-for-in@v0.2.1-esm/index.mjs';
```

#### forIn( obj, fcn\[, thisArg ] )

Invokes a `function` for each own and inherited enumerable property of an `object`.

```javascript
function log( value, key ) {
    console.log( '%s: %d', key, value );
}

function Foo() {
    this.a = 1;
    this.b = 2;
    return this;
}

Foo.prototype.c = 3;
Foo.prototype.d = 4;

var obj = new Foo();

forIn( obj, log );
/* e.g., =>
    a: 1
    b: 2
    c: 3
    d: 4
*/
```

The invoked `function` is provided three arguments:

-   `value`: object property value
-   `key`: object property
-   `obj`: the input object

To terminate iteration before visiting all properties, the provided function must explicitly return `false`.

```javascript
function log( value, key ) {
    console.log( '%s: %d', key, value );
    return false;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

forIn( obj, log );
// e.g., => a: 1
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
}

var obj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4
};

var context = {
    'sum': 0,
    'count': 0
};

forIn( obj, sum, context );

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns the input `object`.
-   Property iteration order is **not** guaranteed.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import fromCodePoint from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-from-code-point@esm/index.mjs';
import forIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-for-in@v0.2.1-esm/index.mjs';

function update( value, key, obj ) {
    console.log( '%s: %d', key, value );
    obj[ key ] *= value;
}

function Foo() {
    return this;
}

Foo.prototype.beep = 3.14;

var obj;
var key;
var i;

obj = new Foo();
for ( i = 0; i < 26; i++ ) {
    key = fromCodePoint( 97 + i );
    obj[ key ] = i;
}

forIn( obj, update );
console.log( obj );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils-for-own`][@stdlib/utils/for-own]</span><span class="delimiter">: </span><span class="description">invoke a function for each own enumerable property of an object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-for-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-for-in

[test-image]: https://github.com/stdlib-js/utils-for-in/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/utils-for-in/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-for-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-for-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-for-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-for-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-for-in/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-for-in/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-for-in/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-for-in/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-for-in/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-for-in/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-for-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-for-in/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each/tree/esm

[@stdlib/utils/for-own]: https://github.com/stdlib-js/utils-for-own/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
