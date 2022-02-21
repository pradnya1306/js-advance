function Person () {
    this.name = 'John'
    this.age = 23
}

// create an object
const person = new Person();
console.log(person)


function student(firstName,lastname){
    this.name=firstName;
    this.lname=lastname;
    this.getfullName=function(){
        console.log(`${this.name}${this.lname}`)
    }
}
let student1=new student("john","doe")
console.log(student1)