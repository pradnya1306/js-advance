const perone=(friend,callback_fun)=>{
    console.log(`now I am busy.I am taling with ${friend}.
    I will call you back later`)
    callback_fun()
}
function pertwo(){
    console.log("I called back you")
}
perone("Pradnya",pertwo)


// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 4000, 'John', sayName);


function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 4000);
sayName();