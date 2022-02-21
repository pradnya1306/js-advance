sum
let arr=[1,2,3,4,5]
let newarr=arr.reduce((accum,curr)=>{
    return accum + curr;
})
console.log(newarr)//15

const numbers = [1, 2, 3, 4, 5, 6];
function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21

const message = ["JavaScript ", "is ", "fun."];
function joinStrings(accumulator, currentValue) {
  return accumulator + currentValue;
}
let joinedString = message.reduce(joinStrins);
console.log(joinedString);
// Output: JavaScript is fun.


// subtrcting form array

const numbers = [1800, 50, 300, 20, 100];
// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let difference = numbers.reduce(
  (accumulator, currentValue) => accumulator - currentValue
);
console.log(difference); // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;
// function that subtracts all array elements from given number
15000 - 1800 - 2000 - 3000 - 5000 - 500
let remaining = expenses.reduce(
  (accumulator, currentValue) => accumulator - currentValue,
  salary
);
console.log(remaining); // 2700

let remaining = expenses.reduce(function(accumulator, currentValue){
  return accumulator - currentValue;
}
  ,salary
);
console.log(remaining); 


// Remove Duplicate Items from Array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {                  
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]


// Grouping Objects by a property

let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
}

let groupedPeople = groupBy(people, "age");
console.log(groupedPeople);


// sum values of an object reduces
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)
console.log(sum) // logs 6

let initialValue = 0
let a=[{x: 1}, {x: 2}, {x: 3}]
let sum = a.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)
console.log(sum) // logs 6

// with arrow function
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue)
console.log(sum) // logs 6

// flatten an array of array
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
console.log(flattened)
// flattened is [0, 1, 2, 3, 4, 5]


// counting instance of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
console.log(countedNames)
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

sum
const arr=[5,1,3,2,6]
function sum(acc,curr){
  return acc+curr
}
const output=arr.reduce(sum)
console.log(output)




