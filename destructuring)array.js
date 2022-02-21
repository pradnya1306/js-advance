
// Basic variable assignment
a=[1,2,3,4]
let [e,b,c,d]=a
console.log(e)

a=[1,2,3]
let [b,,d]=a
console.log(b)
console.log(d)

// Assignment separate from declaration
// A variable can be assigned its value via destructuring, separate from the variable's declaration.
let a,b;
[a,b]=[10,20];
console.log(a)
console.log(b)

// default value
let a,b;
[a=20,b=30]=[40]
console.log(a)
console.log(b)

// Swapping variables
// Two variables values can be swapped in one destructuring expression.
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Parsing an array returned from a function
// It's always been possible to return an array from a function. Destructuring 
// can make working with an array return value more concise.
function f() {
  return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2


// array passsing in function
var arr=[10,20,30]
function myfun([val1,val2,val3]){
  console.log(val1)
  console.log(val2)
  console.log(val3)
}
myfun(arr)

// ignoring some returned values
// You can ignore return values that you're not interested in:
// function f() {
  return [1, 2, 3];

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

// Assigning the rest of an array to a variable
// When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]


// array passing in functionan dusing rest parameter
var arr=[10,20,30,40,50,60,70]
function myfun([val1,val2,...rest]){
  console.log(val1)
  console.log(val2)
  console.log(rest)
}
myfun(arr)

// array returing in function
// simple way
var arr=[10,20,30]
function myfun(z){
  return z
}
var x=myfun(arr)
console.log(x[0])
console.log(x[1])
console.log(x[2])

destruring
var arr=[10,20,30]
function myfun(z){
  return z
}
var [val1,val2,val3]=myfun(arr)
console.log(val1)
console.log(val2)
console.log(val3)

// nested array destructuing
var arr=["geekyshow","six","javascript",["payal","rahul"]]
var [tutor,duration,course,[stu1,stu2]]=arr
console.log(tutor)
console.log(duration)
console.log(course)
console.log(stu1)
console.log(stu2)

function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"
