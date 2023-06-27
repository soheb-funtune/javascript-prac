
let num=11;
let isPrime=true;
// for(i=2 ; i<num; i++){
for(i=2 ; i<num; i++){
    if(num%i == 0 ){
         isPrime=false;
        break;

    }
  
}
if(isPrime){
    console.log('it is prime num');
}
else{
    console.log('not prime');
}