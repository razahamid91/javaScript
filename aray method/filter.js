// filtering even number from array which is greater than 5;

const array = [1,2,3,5,7,9,8,24,6,85];

const even= function(number){
  return number%2===0 && number>5;
}

const evenNumber = array.filter(even);

console.log(`the even number is ${evenNumber}`);

// other method  finding odd numbers 


const numbers = [1,2,3,5,7,9,8,24,6,85,4,8,92];

const oddNumber = numbers.filter((number)=>{
    return number%2!==0 && number<30;
})

console.log(`The odd number is ${oddNumber}`);