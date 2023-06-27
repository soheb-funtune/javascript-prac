// The JavaScript this keyword refers to the object it belongs to. 
// ... In a function, this refers to the global object. In a function,
//  in strict mode, this is undefined . In an event, this refers to the 
//  element that received the event.



function Circle(r) {     // this is constructor
    this.radius = r;
    this.pi = 3.14;
    this.area= function() {
        return this.pi*this.radius*this.radius;
        
    }

}

const result = new Circle(4);
// console.log(result);

const a = result.area();
console.log(a);