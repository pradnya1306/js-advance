'use strict'
// Undeclared variable is not allowed.
a=19
console.log(a)

// Undeclared objects are not allowed.
'use strict';
person = {name: 'Carla', age: 25}; // throws an error

// Deleting an object is not allowed.
'use strict';
let person = {name: 'Carla'};
delete person; // throws an error

// Duplicating a parameter name is not allowed.
"use strict";
function hello(p1, p1) { 
    console.log('hello')
}; // throws an error
hello();

// Assigning to a non-writable property is not allowed.
'use strict';
let obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
// assignment to a non-writable property
obj1.x = 9; // throws an error


// Assigning to a getter-only property is not allowed.
'use strict';
let obj2 = { get x() { return 17; } };
// assignment to a getter-only property
obj2.x = 5; // throws an error


// The variable name arguments and eval are not allowed.
'use strict';
let arguments = 'hello'; // throws an error
let eval = 44;