"use strict";

class Car
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}
}

class Bike
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike();

var isValid = carObj instanceof Car;
var isValid2 = bikeObj instanceof Car;

console.log(isValid);
console.log(isValid2);



