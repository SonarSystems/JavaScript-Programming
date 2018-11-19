"use strict";

var mp = new Map();
mp.set("Key1", "Hello World");
mp.set("1", "Number 1");

console.log(mp);
console.log(mp.get("Key1"));
console.log(mp.get("1"));
console.log(mp.has("1"));

var mp2 = new Map(
[
	["k1", "value1"],
	["k2", "value2"],
	["k3", "value3"]
]);

console.log(mp2);

for (let i of mp2.entries())
{
	console.log(`${i[0]} - ${i[1]}`);
}