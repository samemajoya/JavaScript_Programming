let globalVariable = " i am a global";

function exampleFunction(){
    let localVariable = "i am a local";
    console.log(globalVariable);
    console.log(localVariable);
}

exampleFunction();
console.log(globalVariable);

if(true){
    let blockLetVariable = "i'm block-scoped with let";
    const blockConstVariable ="i'm block-scoped with const";

}

function exampleFunctionVar(){
    if(true){
        var functionScopeVar= "i'm function-scoped with var!"
    }
    console.log(functionScopeVar);
}
exampleFunctionVar();
console.log(functionScopeVar);

