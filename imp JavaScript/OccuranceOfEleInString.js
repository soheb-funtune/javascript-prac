var count =0;
function Occurance(str,c){
   console.log('this is function')
//    let str = 'shoheb sayyd '
//    let c = 's'
   for(i=0; i<str.length; i++){
    if(str[i] == c){
        count++;
        console.log(count)
        
    }
        
    return count;
}

}


// Occurance();
console.log(Occurance('shoheb','h'))