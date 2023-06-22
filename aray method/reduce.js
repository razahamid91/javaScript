 // sum of the elements of the array.
 
 const num = [1,2,3,4,5,6,7,8,9,10];

 const sum= num.reduce((accumulator, currentValue)=>{

    return accumulator+currentValue;
 });

 console.log(sum);

 //  accumulator= 1st value of the array
 // currentValue = 2nd value of the array.

 // return value is the next accumulator value and 3rd is currentValue.

 //ex2  find total price in the cart items

 const users =[
    {productId:1 , productName: 'mobile' , price:12000},
    {productId:1 , productName: 'laptop' , price:32000},
    {productId:1 , productName: 'tv' , price:22000},
    {productId:1 , productName: 'iphone' , price:72000},
    {productId:1 , productName: 'shoes' , price:52000}
 ]

 const totalPriceIncart = users.reduce((totalPrice, currentProduct)=>{
    return totalPrice+currentProduct.price;
 },0)
 console.log('total Price', totalPriceIncart );
