"use strict";

outsideTheLoop:
for (var i = 0; i < 100; i++)
{
	if (i === 80)
	{
		break outsideTheLoop;
	}

	console.log(i);
}









