
const programmingLanguageMap = new Map();
const arrayFromMap = Array.from(programmingLanguageMap);
console.log(arrayFromMap);

const mapFromArray = new Map(arrayFromMap);
console.log(mapFromArray)