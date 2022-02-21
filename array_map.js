const arr=[10,20,30,40]
const newarr=arr.map(add)
function add(value){
    value++
    return value

}
console.log(newarr)
console.log(arr)


var dic=[
    {price:100,product:'iron'},
    {price:200,product:'mobile'},
    {price:300,product:'pc'},
    {price:400,product:'laptop'}
]
let arr=dic.map(function(value){
    return value.price
})
console.log(arr)

// with arrow function
let arr=dic.map(value => value.price)
console.log(arr)

let numbers = [2, 4, 6, 8, 10];
let arr=numbers.map(function(value){
    return value*value
})
console.log(arr)


const string = "JavaScript";
const stringArr = string.split(''); // array with individual string character
// let asciiArr = stringArr.map(x => x.charCodeAt(0));let asciiArr = stringArr.map(x => x.charCodeAt(0));
let asciiArr=stringArr.map(function(x){
    return x.charCodeAt()
})
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']
console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]


const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};
let newArr = employees.map(function(obj){
    newobj={}
    newobj.name=obj.name
    newobj.netEarning=obj.salary+obj.bonus-obj.tax
    return newobj
});

console.log(newArr)

var a=["1", "2", "3"]
var new1=a.map(function(element){
    return parseInt(element)
  })
console.log(new1)
  
const arr=[5,1,3,2,6]
function double(x){
    return x*2;
}
const output=arr.map(double)
console.log(output)

const arr=[5,1,3,2,6]
function binary(x){
    return x.toString(2)
}
const output=arr.map(binary)
console.log(output)