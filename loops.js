console.log("it is for  loop");

let fruit = ["apple","banana", "mango"];

let fruit2= [];

for(let i=0;i<fruit.length;i++){
    fruit2.push(fruit[i].toUpperCase());
}
console.log(  fruit2);

// for of  loops in array

console.log("it is for of loop");


const fruits =["apple","banana", "mango"];
const fruits2=[];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

// for in  loops in array

console.log("it is for in loop");

const fruits1 =["apple","banana", "mango"];
const fruits3=[];
for(let index in fruits1){
    fruits3.push(fruits1[index].toUpperCase());
}
console.log(fruits3);

// while loop

console.log("while loop");

const f =["apple","banana", "mango"]
let i=0;
while(i<f.length){
    console.log(f[i]);
    i++;
}