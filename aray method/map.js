// create a function that give square of the number

const numbers=[2,3,4,5,6,7,8,9];

// const square= function(number){
//     return number*number;
// }
const ans =numbers.map((number)=>number*number);
console.log(ans)

// ex2

const users =[
    {name: 'Hamid', age:20, gender: 'male'},
    {name: 'Saif', age:23, gender: 'male'},
    {name: 'sunny', age:21, gender: 'male'},
    {name: 'Raza', age:19, gender: 'male'}
];

const answer = users.map((Name )=>{
 return Name.name
})

console.log(answer)