 
 const persons ={
    data : [
        {no:4 , name:"mohammad" , city:"saudi"},
        {no:5 , name:"shoheb" , city:"wadi"},
        {no:6 , name:"abubakar" , city:"degloor"},
        {no:7 , name:"arman" , city:"nanded"}
    ]
};
//  import {persons} from "./Data";

 const MappingDatafObj =()=>{
     const details = persons.data;

     details.map((item)=>{
         console.log(item.no);
         console.log(item.name);
         console.log(item.city);
     })}

    //  return(
    //      <div>
    //          {details.map((item)=>{
    //              return(
    //                  <div>
                         
    //                  </div>

    //              )
    //          })}
    //      </div>
    //  )
 