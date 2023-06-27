import {dbData} from './dbData';
const lastFirst= dbData.arr.map((item)=>
    `${item.lastName} ${item.firstName}`
    );

    console.log(lastFirst);

// const result = obj.arr.map((item)=>
//     `mr.${item.MiddleName}`
// )
// console.log(result);