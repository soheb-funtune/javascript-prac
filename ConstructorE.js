// naming difference 
// constructor : pascle
// Factory : camelCased

// constructor uses new keyword

// function CheckConstructor(con,age,city,state) {
//     this.name = con,
//     this.age = age,
//     this.city = city,
//     this.state = state
    
// }


// const res=new CheckConstructor('shoheb',22,'nanded','maha');
// const ress=new CheckConstructor('munna',21,'wadu');
// console.log(ress);


function person(n,a) {
    const Details = {};
    Details.name = n;
    Details.age = a;
    return(Details);
    
}
console.log(person('shoheb',22));