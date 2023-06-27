 const arr=[1,1,1,1,33,3,3,3,3,5,5,5,5,5,55,77,7,7,7,7,7,7,7,7,7,7,8,8,8,9,9,];
const count=0;
const a=[];
for (i=0 ; i<arr.length ; i++){
    if(arr[0]==arr[i]){

        count=count+1;
    }
    else{

        arr[i]=arr[i]+1;
        break;
    }
        // console.log(arr[])
}

// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts[5], counts[2], counts[9], counts[4]);
