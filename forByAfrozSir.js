// function Table(num){
//     for(i=1;i<=10;i++){
//     console.log(`${i}*${num}=${i*num}`)
//     }

// }

// Table(5);

// '''''''''for in loop'''''''''''''

// let obj={
//     sr_no:01,
//     name:"mohammad"
// }

let obj = { a: "mohammmad", b: "adam", c: "sultan", d: "salman", e: "shoheb" };
for (let key in obj) {
  //it works on indexes
  console.log(key, ":", obj[key]); // with the help of "for...in" we can itterate on "Object" also
}

// let arr = ["mohammmad", "adam", "sultan", "salman", "shoheb"];

// for (let i in arr) {
//   console.log(arr[i]);
// }

// '''''''''for of ''''''''''

// let arr=["mohammmad","adam","sultan","salman","shoheb"];

// for(let i of arr){        //for of returns values
//     console.log(i);
// }
