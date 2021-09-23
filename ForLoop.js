const data = [2,4,5,7];
console.log("using for loop");
for(let i=0 ; i<data.length ; i++){
    console.log(i+":"+data[i]);
}



console.log("using foreach loop");

data.forEach((element) =>{

    console.log(element);
});