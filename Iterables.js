const stringIterable = "hello, javascript";
const setIterable = new Set([1,2,3,4,5]);

for (const char of stringIterable){
    console.log(char);
}

for(const num of setIterable){
    console.log(num);
}