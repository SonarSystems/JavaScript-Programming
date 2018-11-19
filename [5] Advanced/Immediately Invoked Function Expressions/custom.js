"use strict";


var EpicFunc = function()
{
	var EpicLoop = function()
	{
		for (var i = 0; i < 10; i++)
		{
			console.log(i);
		}
	}();

	console.log(i);
}

var EpicFunc2 = function()
{
	(function()
	{
		for (var i = 0; i < 10; i++)
		{
			console.log(i);
		}
	})();

	console.log(i);
}

//EpicFunc();
EpicFunc2();