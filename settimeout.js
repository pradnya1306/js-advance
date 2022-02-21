//program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}
setTimeout(greet, 3000);
console.log('This message is shown first');
//The setTimeout() method returns the interval id. For example,

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + 3);   


// program to stop the setTimeout() method
let count = 0; 
// function creation
function increaseCount(){
    // increasing the count by 1
    count += 1;
    console.log(count)
}
let id = setTimeout(increaseCount, 3000);
// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');


//program to display a name
function greet(name, lastName) {
    console.log(`Hello ${name } ${lastName}`);
}
// passing argument to setTimeout
setTimeout(greet, 3000, 'John', 'Doe');