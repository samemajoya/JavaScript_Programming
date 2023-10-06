let bigIntA= 12334556678890;
let regularNumber= 42;

let bigIntToNumber = Number(bigIntA);
let numberToBigInt = BigInt(regularNumber);

console.log("bigint to number: ", bigIntToNumber);
console.log("number to bigint : ", numberToBigInt);

let conciseBigInt = 123n;

console.log("concise bigint: ", conciseBigInt);
