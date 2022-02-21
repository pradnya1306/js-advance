class student{
    constructor(){//consturctor
        // this.studentname=name
        // this.studentage=age
        let name;
        console.log("constturctor function")
    }
    hello(){//prototype
        // console.log(`my name is ${this.studentname} my age is ${this.studentage}`)
        console.log("hello",this.name)
    }
}
let a= new student()
// let b= new student("Rutuja",23)


a.name="Pradnya"
a.hello()

class student{
    constructor(){
        let name;
        console.log("consturctor fun")
    }
    hello(){
        console.log("hello",this.name)
    }
}
let a= new student()
a.name="Pradnya"
a.hello()

class student{
    constructor(name,age){
        this.studentname=name;
        this.studentage=age;
        console.log("consturctor fun")
    }
    hello(){
        console.log(`hello ${this.studentname}your age ${this.studentage}`)
    }
}
let a= new student("pradnya",22)
a.hello()


class student{
        constructor(name,age){
            this.studentname=name;
            this.studentage=age;
            console.log("consturctor fun")
        }
        hello(){
            console.log(`hello ${this.studentname}your age ${this.studentage}`)
        }
        static sum(){
            console.log("static function")
        }
    }
let a= new student("pradnya",22)
a.hello()
student.sum()
    
    
class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personNam(x) {
        this.name = x;
    }
}

let person1 = new Person('Jack');
console.log(person1.name); // Jack

// changing the value of name property
person1.personNam = 'Sarah';
console.log(person1.name); // Sarah


// class example
class Person{
    constructor(name){
        this.name=name
    }
}
const person1=new Person('john')
console.log(person1.name)

// class method
class Person{
    constructor(name){
        this.name=name
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
let person1=new Person(`John`)
console.log(person1.name)
person1.greet()