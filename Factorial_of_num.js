const num = 5;

if(num===0)
    console.log(`factorial of ${num} is 1`);
else if(num<0)
    console.log(`factorial of 0 doesn't exist`);
else{
    fact=1;
    for (let i = 1; i <= num; i++){
        fact=fact*i;
    }
    console.log(`factorial of ${num} is ${fact}`);
}