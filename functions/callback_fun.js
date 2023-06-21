// callback function

/** it take another function as argument without parenthesis-()  . whole function is called */

// ex-

function fun(){
    console.log("this is fun function");
}

function fun2(callback){
    console.log('inside the fun2 and i am calling fun functon')

    callback();
}

fun2(fun);