let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}
let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);
Output: [ 2, 4, 6, 8, 10 ]


// Filtering out values from Array
const prices = [1800, 2000, null,3000, 5000, "Thousand", 500, 8000]
function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}
let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]
// using arrow function
let newPrices = prices.filter((price) => (price > 2000&& !Number.isNaN(price) ));
console.log(newPrices); // [ 3000, 5000, 8000 ]


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// filtering out all smal values
function isBigEnough(value) {
    return value >= 10
  }
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  // filtered is [12, 130, 44]


// find all prime numbers
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


const array1=[5,12,8,130,44]
const newArr=array1.filter((elem,index,arr)=>{
    return elem >12;
})
console.log(newArr)

odd
const arr=[5,1,3,2,6]
function isOdd(val){
   return val%2
}
const output=arr.filter(isOdd)
console.log(output)

// even
const arr=[5,1,3,2,6]
function isEven(x){
  return x%2===0
}
const output=arr.filter(isEven)
console.log(output)