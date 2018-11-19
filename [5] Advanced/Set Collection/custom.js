"use strict";

var st = new Set([1, 2, 3, 5, 5]);

console.log(st);
console.log(st.has(5));
console.log(st.has(9));

for (let item of st)
{
	console.log(item);
}