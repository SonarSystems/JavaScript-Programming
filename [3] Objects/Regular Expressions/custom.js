"use strict";

var re = /(\w+)\s(\w+)/;
var string = "JKohn Smith";

console.log(string);

var result = string.replace(re, '$2, $1');

console.log(result);