

const cubicArray = (data) =>{
    const nArray = [];
    data.forEach((item) => {
         //Math.paw(item,3);
        nArray.push(Math.pow(item,3));
        
    });
    return nArray;

}
console.log(cubicArray([2,4,5,7]));


