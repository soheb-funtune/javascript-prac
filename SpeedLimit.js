 
 function Check(speed) {
     if(speed>=70){
         const c = (speed-70)/5
         console.log("points :"+c);
         if(c>=12)
            console.log("licence is cancled, points :",c);
     }
     
 }

 Check(135);