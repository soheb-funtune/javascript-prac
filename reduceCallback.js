//reduce methos hava callback function and 
//  it has two parameter first is accumelator and second is current 
//  by default accumelator take 0th indexs value and current para take 1th indexs value 
// if you give some value at the last befor clossing curly brass that will going to assign accumelator 




// const arr = [12,14,16,18,20];

// const sum = arr.reduce((accumulator,current) => {
//     return accumulator + current;
// },0)

// console.log(sum);


// const arr2 = [10,20,30,40,50]

// const sum2 =arr2.reduce((accumelator,current)=>{
//     return  accumelator + current;

// },20);             //  whatever you define here that will be going to your accumelator



const arr3 = [2,4,6,8,10];

const sum3 = arr3.reduce((a,b)=> {
    return a+b*b;
},0);

console.log(sum3)
