const programmingLanguage = new Set();

programmingLanguage.add("javascript");
programmingLanguage.add("python");
programmingLanguage.add("java");

console.log(programmingLanguage.size);
console.log(programmingLanguage.has("javascript"));

programmingLanguage.delete("python");

console.log(programmingLanguage);

