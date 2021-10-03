function Change(){
    let val=document.getElementById('inp').value;
    console.log(val);
    document.getElementById('div').innerHTML=`<h1 style='text-align:center;'>${val}</h1>`;
}