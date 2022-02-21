const jethalal={
    wife:"Daya",
    age:34
}
const Bhide={
    wife:"madhvi",
    age:45
}
function popatlal(){
    console.log(this.wife,"will make food")
}
popatlal.call(jethalal)

function popatlal(a,b){
    console.log(this.wife)
    console.log("a"+ " "+a,"b"+" "+a)
}
popatlal.call(jethalal,"hello",20)

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"

// using call
const human = {
    firstName: "Judah",
    lastName: "Parker",
    age: 26,
  };
function greet() {
    const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    console.log(string);
  } 
greet.call(human); // My name is Judah undefined. I am 26 years old.


function Animal(name, age) {
    this.name = name;
    this.age = age;
  }
  
  function Horse(name, age) {
    Animal.call(this, name, age);
    this.sound = "Neigh";
  }
  
  function Snake(name, age) {
    Animal.call(this, name, age);
    this.sound = "Hiss";
  }
  
  const snake1 = new Snake("Harry", 5);
  console.log(snake1.name, snake1.age, snake1.sound);
  
  const horse1 = new Horse("Arnold", 8);
  console.log(horse1.name, horse1.age, horse1.sound);

const jethalal={
      wife:"Daya",
      age:34
  }
  const Bhide={
      wife:"madhvi",
      age:45
  }
  function popatlal(a,b){
      console.log(this.wife,"will make food","a="+a,"b="+b)
  }
popatlal.call(jethalal,"hello","good day")
popatlal.apply(jethalal,["hello","good day"])
fun=popatlal.bind(jethalal,"hello","good day")
fun()
  