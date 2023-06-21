// callback function

/** it take another function as argument without parenthesis-()  . whole function is called */

// ex-

function fun(){
    console.log("this is fun function");
}

function fun2(a){
    console.log('inside the fun2' ,a)
}

fun2(fun);