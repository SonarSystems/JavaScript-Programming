"use strict";

var num1 = 9;
var num2 = 0;

try
{
	if (num2 === 0)
	{
		throw("You cannot divide by zero dammit");
	}
	else
	{
		console.log(num1 / num2);
	}
}
catch (error)
{
	console.log(error);
}
finally
{
	console.log("This is code is immortal!!!");
}