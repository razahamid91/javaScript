const numbers=[1,2,3,4,5,6,7];

numbers.forEach(function(number,index){
    console.log(`the number is ${number} and index is ${index} and multiply by 2 is ${number*2}`);
})


// ex2 

const users =[
    {name: 'Hamid', age:20, gender: 'male'},
    {name: 'Saif', age:23, gender: 'male'},
    {name: 'sunny', age:21, gender: 'male'},
    {name: 'Raza', age:19, gender: 'male'}
];

users.forEach(function(person){
    console.log(person.name)
})
