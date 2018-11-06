"use strict";

class Vehicle
{
	constructor(x, y)
	{
		console.log("The x position is: " + x);
		console.log("The y position is: " + y);
		console.log("This is the constructor.");

		this.x = x;
		this.y = y;
	}

	VehicleFunc()
	{
		console.log("This function is from the Vehicle class");
	}
}

class Car extends Vehicle
{
	EpicFun()
	{
		console.log("This is an epic function");
	}

	static StaticFun()
	{
		console.log("This is epicly static.");
	}

	VehicleFunc()
	{
		console.log("This is the Car Class");
	}
}

class Bike extends Vehicle
{

}

var carObj = new Car(56, 78);
var carObj2 = new Car(90, 0);

var bikeObj = new Bike(0, 0);

carObj.VehicleFunc();
bikeObj.VehicleFunc();




