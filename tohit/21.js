
// function sums(digits){
//   arrDigs=Array.from(digits.toString()).map(Number)
//   let sum=0
//   arrDigs.forEach((element)=>sum+=element)
//   return sum;
// }
// console.log(sums(234))

function addem(nums){
  
  arrNum=Array.from(nums.toString()).map(Number)
  ans=0
  arrNum.forEach((element)=>{
    ans=ans+element;
  })
  return ans;
}
// console.log("this is from function call :",addem(1236))

const add =(num)=>{
  a=num.toString()
  console.log("is converted into string",a);
   b=Array.from(a)
  console.log("Formed array :",b)
  let sum=0;
  b.forEach(ele => {
    console.log("these are the elements",ele)
    sum=sum + parseInt(ele);
  });
  // console.log(sum);
  return sum;
  
}
console.log("this is my function :",add(123))