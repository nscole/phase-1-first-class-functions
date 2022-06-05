// 
function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction(fn){
    return function fn(){
        return "Hello function my name is";
    };
}

function returnsAnAnonymousFunction(){
    return function (){
        return "My name is Judge Judy";
    };
}

