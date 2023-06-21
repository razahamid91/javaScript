// function returning function

function myfun(){
    function fun1(){
        console.log("I am inside the inner function");
    }
    return fun1;
}

const ans = myfun();
ans();
