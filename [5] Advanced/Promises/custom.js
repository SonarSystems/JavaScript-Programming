"use strict";

function Divide(num1, num2)
{
	var promise = new Promise(function(resolve, reject)
	{
	  if (num2 !== 0)
	  {
	    resolve(num1 / num2);
	  }
	  else
	  {
	    reject("It didn't work");
	  }
	});

	return promise;
}

Divide(5, 0)
.then(
	function(result) {
		console.log(result);
		return Divide(6, 7);
	},
		function(err) {
		console.log(err);
	})
.then(
	function(result) {
		console.log(result);
	},
	function(err) {
		console.log(err);
	});
