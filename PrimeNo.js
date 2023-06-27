const arr= [1,4,3,6,7,9,6,4,6,8,33,54,76];
let notp=[]
let prime=[]
for (i=1; i<=arr.length;i++) {
    if(arr[i]===1)
        console.log(`this is one : ${arr[i]}`);
    for(let j of arr){
        if(j%i == 0){
            notp=j;
        }
        else if(j%i !== 0 && j%j==0){
            prime=j;
        }
    }
}
console.log("prime numbers are : ",prime);
console.log("not prime numbers are :",notp);
// (i=0 ;i<arr.length; i++){

//     if()
// }