const arr = ['mohammad','shoheb','abubakar','mudassir','shoheb'];

console.log(arr.indexOf('shoheb'));        //indexOf() methode returns first occurance of specified element/item

console.log(arr.lastIndexOf('shoheb'));    // lastIndexOf() methode returns last occurance of specified lement/item


console.log(arr.includes('mohammad'));     //  includes() method returns 'true' if specified item is present in array

const numArray = [1,9,2,3,5,4,8,6,9,4,6]
// find() returns first value after condition is true  / 
console.log(numArray.find((item)=>item >  6));      // it returns first value of specified condition

console.log(numArray.reduce((accu,current)=>accu+current));