"use strict";

// Hello this is an epic variable
//var i = 9;

/*
var i1 = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
*/

function AwesomeFunc()
{
	console.log("Hello");
	console.log("and");
	console.log("Goodbye");
}

function Sum(num1, num2)
{
	var result = num1 + num2;

	console.log(result);
}

function SumReturn(num1, num2)
{
	var result = num1 + num2;

	return result;
}

AwesomeFunc();
Sum(4, 7);
console.log(SumReturn(5, 9));

var epicVar = SumReturn(2, 100);

console.log(epicVar);






