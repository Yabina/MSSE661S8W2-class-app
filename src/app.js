// var array = [1,2,3,4,5].sort(function(a,b) {});

// function sort(a,b) {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     }
//     return 0;
// }

// function compare(a,b) {
//  //   if(a<b) {
//  //       return true;
//   //  }
//    // return false;
//     return a >= b;
// }

// var b =false;

// var a = b | undefined;

// console.log(a);
var object = {
    name: 'Bob',
    age: 50
};

 class Person {
    name;
    age;
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
   
       
       getLegal() {
        return this.age > 21;
    }

    
    
}
//var person = new Person(personObject.name, personObject.age);
var person = (new Person ('Bob',50))

console.log(new Person('Bob',50));
console.log(person.getLegal());

 
