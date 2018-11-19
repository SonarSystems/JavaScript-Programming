"use strict";



var epicVar = () =>
{
	console.log("Hello World");
}


var epicVar2 = new Function("x", "y", "console.log(x * y);");



epicVar();
epicVar2(5, 6);

