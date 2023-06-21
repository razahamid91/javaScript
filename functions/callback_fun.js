// callback function

/** it take another function as argument without parenthesis-()  . whole function is called */

// ex-

function fun(name){
    console.log(` 2 this is fun function`);
    console.log(`3 my name is ${name}`)
    
}
 
function fun2(callback){
    console.log(` 1 inside the fun2 and i am calling fun functon`)

    callback('hamid');
}

fun2(fun);
