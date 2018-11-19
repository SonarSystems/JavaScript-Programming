"use strict";

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function()
{
	if (this.readyState == 4 && this.status == 200)
	{
		console.log(this.responseText);
	}
};

xhttp.open("GET", "file.txt", true);
xhttp.send();
