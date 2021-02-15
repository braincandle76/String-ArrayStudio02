let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
console.log(protoArray1.includes(","));

console.log(protoArray2.includes(";"));

console.log(protoArray3.includes(" "));

console.log(protoArray4.includes(", "));

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

if (strings[0].includes(",")) {
  let protoArray5 = [];
protoArray5 = protoArray1.split(',').reverse();
console.log(protoArray5); 
console.log(protoArray5.join(","));
} else if (strings[1].includes(",")) {
  let protoArray5 = [];
protoArray5 = protoArray2.split(',').reverse();
console.log(protoArray5); 
console.log(protoArray5.join(","));
} else if (strings[2].includes(",")) {
  let protoArray5 = [];
protoArray5 = protoArray3.split(',').reverse();
console.log(protoArray5); 
console.log(protoArray5.join(","));
} else if (strings[3].includes(",")) {
  let protoArray5 = [];
protoArray5 = protoArray4.split(',').reverse();
console.log(protoArray5); 
console.log(protoArray5.join(","));
} 

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.

if (strings[0].includes(";")) {
  let protoArray6 = [];
protoArray6 = protoArray1.split(';').sort();
console.log(protoArray6); 
console.log(protoArray6.join(","));
} else if (strings[1].includes(";")) {
  let protoArray6 = [];
protoArray6 = protoArray2.split(';').sort();
console.log(protoArray6); 
console.log(protoArray6.join(","));
} else if (strings[2].includes(";")) {
  let protoArray6 = [];
protoArray6 = protoArray3.split(';').sort();
console.log(protoArray6); 
console.log(protoArray6.join(","));
} else if (strings[3].includes(";")) {
  let protoArray6 = [];
protoArray6 = protoArray4.split(';').sort();
console.log(protoArray6); 
console.log(protoArray6.join(","));
} 

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.

if (strings[0].includes(" ")) {
  let protoArray7 = [];
protoArray7 = protoArray1.split(' ').reverse();
console.log(protoArray7); 
console.log(protoArray7.join(" "));
} else if (strings[1].includes(",")) {
  let protoArray7 = [];
protoArray7 = protoArray2.split(' ').reverse();
console.log(protoArray7); 
console.log(protoArray7.join(" "));
} else if (strings[2].includes(" ")) {
  let protoArray7 = [];
protoArray7 = protoArray3.split(' ').reverse();
console.log(protoArray7); 
console.log(protoArray7.join(" "));
} else if (strings[3].includes(" ")) {
  let protoArray7 = [];
protoArray7 = protoArray4.split(' ').reverse();
console.log(protoArray7); 
console.log(protoArray7.join(" "));
} 

//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.

if (strings[0].includes(", ")) {
  let protoArray8 = [];
protoArray8 = protoArray1.split(', ').reverse();
console.log(protoArray8); 
console.log(protoArray8.join(","));
} else if (strings[1].includes(", ")) {
  let protoArray8 = [];
protoArray8 = protoArray2.split(', ').reverse();
console.log(protoArray8); 
console.log(protoArray8.join(","));
} else if (strings[2].includes(", ")) {
  let protoArray8 = [];
protoArray8 = protoArray3.split(', ').reverse();
console.log(protoArray8); 
console.log(protoArray8.join(","));
} else if (strings[3].includes(", ")) {
  let protoArray8 = [];
protoArray8 = protoArray4.split(', ').reverse();
console.log(protoArray8); 
console.log(protoArray8.join(","));
} 
