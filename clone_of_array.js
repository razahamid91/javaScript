 
 // method one by using slice method
 
 let arr1=[1,2,34,5,7,8];
let arr2 = arr1.slice(0).concat([2,4,6,8,43,4]); // adding more element to the arr2 using concat() method

console.log("arr1 is :" + arr1)
console.log("arr2 is :" + arr2)
 arr1.push(9);
 console.log("after push")
 console.log("arr1 is :" + arr1)
console.log("arr2 is :" + arr2)

console.log(typeof arr2);

// method 2 using concat() method

let array1=[1,2,34,5,7,8];
let array2 = [].concat(array1);

console.log("array1 is :" + array1)
console.log("array2 is :" + array2)
 array1.push(9);
 console.log("after push")
 console.log("array1 is :" + array1)
console.log("array2 is :" + array2)

console.log(typeof array2);

// method 3 using spread method 

let arra1=[1,2,34,5,7,8];
let arra2 = [...arra1];

console.log("array1 is :" + arra1)
console.log("array2 is :" + arra2)
 arra1.push(9);
 console.log("after push")
 console.log("array1 is :" + arra1)
console.log("array2 is :" + arra2)
console.log(arra1===arra2)
console.log(typeof arra2);