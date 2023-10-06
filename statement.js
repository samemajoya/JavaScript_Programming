let hour = new Date().getHours();
let greeting;

if(hour<12){
    greeting = "good morning";
}else{
    greeting= "good evening";
}
console.log(greeting);