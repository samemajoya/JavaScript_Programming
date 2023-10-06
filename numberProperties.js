/*let finiteNumber =52;
let notANumber="hello";

console.log("is finite(52", isFinite(finiteNumber));
console.log("isNaN('hello'):",isNaN(notANumber) );*/

let num= 123.4567890;

let fixedNotation = num.toFixed(2);
let precisionNotation = num.toPrecision(4);
let exponentialNotation = num.toExponential(3);

console.log("fixed notation :", fixedNotation);
console.log("precision notation :", precisionNotation);
console.log("exponential notation :", exponentialNotation);