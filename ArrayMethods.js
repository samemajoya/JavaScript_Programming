let fruits = ['apple','banana','orange'];
fruits.forEach((fruit,index) => {
    console.log('fruit ${index+1}: ${fruit}');
});

let numbers =[1,2,3,4,5];
let squaredNumbers = numbers.map((num) => num * num);
console.log("squared Numbers: " , squaredNumbers);

let ages = [18,44,56,23,89];
let adults = ages.filter((age) => age >= 18);
console.log("Adults: ", adults);

let score = [80,50,78,88,95];
let highScore = score.find((score) => score > 90);
console.log("High Score : ", highScore);


