/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var fromCodePoint = require( '@stdlib/string-from-code-point' );
var forIn = require( './../lib' );

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
