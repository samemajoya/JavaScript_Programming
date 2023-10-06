
try{

//uncomment each block to see the catch in action

//syntaxError
// const x=10;

//referenceError
//console.log(y);

//typeError
//null.toUpperCase();

//rangeError
//const arr = new Array(Infinity);

//customError
//throw new Error("this is a custom error");
} catch(error){
    console.log(`caught an error : ${error.message}`);
}