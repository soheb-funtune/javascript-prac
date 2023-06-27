let num = 153;
let copy=num;
armstrong = 0;
while(num>0){
    let d = num%10;
    armstrong=armstrong+d*d*d;
    console.log(armstrong)
}
if(copy===armstrong)
    console.log("number is armstrong")
else
    console.log("not armstrong")