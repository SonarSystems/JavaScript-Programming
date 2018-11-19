"use strict";


function *Favourites()
{
	var pizza = yield "What is your favourite pizza?";
	var game = yield "What is your favourite game";
	var movie = yield "What is your favourite movie";

	console.log(pizza + " " + game + " " + movie);
}

var q = Favourites();
console.log(q.next());
console.log(q.next("Cheese"));
console.log(q.next("Half-Life"));
console.log(q.next("The Dark Knight"));