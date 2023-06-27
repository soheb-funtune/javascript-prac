
function Digits(num) {
    let arrNum = Array.from(num.toString()).map(Number);
    console.log(arrNum);
    console.log(arrNum.length);
}


console.log(Digits(2345));