"use strict";

class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");
	}
}

var carObj = new Car(56, 78);