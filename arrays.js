let fruits = ['apple','banana','orange'];
let numbers =[1,2,3,4,5];
let mixedArray= ['hello', 42,true,'world'];

console.log("fruits: ", fruits);
console.log("numbers: ", numbers);
console.log("mised array: ", mixedArray);

let firstFruits = fruits[0];
let secondNumber = numbers[1];
let lastItem = mixedArray[mixedArray.length -1];

console.log("first fruits:" , firstFruits);
console.log("second number:" , secondNumber);
console.log("last item:" , lastItem); 

fruits.push('grapes');
numbers[2]=42;
mixedArray.pop();

console.log("modified fruits: ",fruits);
console.log("modified numbers: ",numbers);

console.log("modified mixed array: ",mixedArray);

