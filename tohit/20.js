

const divi=(a,b)=>{
    let c = a > b ? a : b;
    let d = a<b ? a:b;
    console.log(c)
    let count=0;
    while(c>0 && c>=d){
        c = c - d;
        count=count+1;
    }
    console.log("division :",count);
   
}


divi(20,6);