// Array desturcturing 

const fruit = ["apple","banana", "mango"];
 const[value1,value2,value3]=fruit; // destructuring

 console.log(value1);
 console.log(value2);
 console.log(value3);


 // destructuring using spread for storing rest element in variable 2
 
 console.log("using spread operator");

 const fruits = ["apple","banana", "mango"];
 const[variable1, ...variable2]=fruits; // destructuring

 console.log(variable1);
 console.log(variable2);

 // object desturcturing 


 const obj = {
    Name: "hamid",
    age: 22,
    gender:"male",

 }

 const  {Name , ...val1 }= obj;
 console.log(Name , val1)

 