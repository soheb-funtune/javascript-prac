const obj={
    title:"pDAC",
    name:"shoheb",
    arr:[2,3,4,5,6],
    movie : function() {
        console.log(this.name);
        this.arr.forEach(function(ele) {
            console.log("check this in callback function ",ele,this.name);
            
        },this)
        
    }
}
obj.movie();