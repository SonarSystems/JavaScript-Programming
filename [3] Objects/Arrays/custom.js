"use strict";

var var1 = 8;

var arrName = [10, 20, 30, 40, 50, 60];

//console.log(arrName[0]);
//console.log(arrName[1]);

for (var i = 0; i < arrName.length; i++)
{
	//console.log(arrName[i]);
}

var newArray = new Array(100);

for (var i = 0; i < newArray.length; i++)
{
	newArray[i] = i * i;
}

for (var i = 0; i < newArray.length; i++)
{
	console.log(newArray[i]);
}


newArray.push("Hello World");

for (var i = 0; i < newArray.length; i++)
{
	console.log(newArray[i]);
}


console.log(newArray.findIndex((x) => x == 9801));






