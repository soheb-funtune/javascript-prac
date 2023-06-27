function SwapNum(num) {
     let arrNum = Array.from(num.toString()).map(Number);
     return arrNum.reverse.join();
}

console.log(SwapNum(34));