"use strict";


var uri = "my test.asp?name=ståle&car=saab";
var result = encodeURI(uri);

console.log(uri);
console.log(result);

var resultD = decodeURI(uri);

console.log(resultD);