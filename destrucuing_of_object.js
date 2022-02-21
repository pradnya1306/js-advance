// basic consept
var dic={
    name:"riya",
    age:20,
    course:"JS"
} 
var{name,age,course}=dic
console.log(name)
console.log(age)
console.log(course)

// assigning to new variable names
var dic={
    name:"riya",
    age:20,
    course:"JS"
}
var{name:cname,age:time,course:teacher}=dic
console.log(cname)
console.log(time)
console.log(teacher)

var dic={
    name:"riya",
    age:20,
    course:"JS"
}
var{name,course}=dic
console.log(name)
console.log(course)

// seperate from declaration
var a,b;
({a,b}={a:10,b:20})
console.log(a)
console.log(b)

// default value
var{a=10,b=20}={a:40}
console.log(a)
console.log(b)


// assigning to new variables names and providing default values
var{a:y=10,b=20}={a:40}
console.log(y)
console.log(b)

// object passing to a function
var dic={
        name:"riya",
        age:20,
        course:"JS"
    }
function show({name,age,course}){
    console.log(name)
    console.log(age)
    console.log(course)
}
show(dic)

// object returing from function
var dic={
            name:"riya",
            age:20,
            course:"JS"
        }
function show(z){
    return z
}
var{name,age,course}=show(dic)
console.log(name)
console.log(age)
console.log(course)

// nested destructuing of object
var dic={
        name:"riya",
        age:20,
        course:"JS",
        student:{
            stu1:"rani",
            stu2:"payal"
        }
    }
var{name,age,course,student:{stu1,stu2}}=dic
console.log(name)
console.log(age)
console.log(course)
console.log(stu1)
console.log(stu2)

// For of iteration and destructuring
const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (const {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }


//   Computed object property names and destructuring
//   Computed property names, like on object literals, can be used with destructuring.
  let key = 'z';
  let {[key]: foo} = {z: 'bar'};
  console.log(foo); // "bar"

//   Rest in Object Destructuring
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
console.log(a); // 10
console.log(b); // 20
console.log(rest); // { c: 30, d: 40 }

// // Combined Array and Object Destructuring
const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,,{name}] = props;
  
  // console.log(name1); // "FizzBuzz"
  // console.log(name2)
  console.log(name)

  