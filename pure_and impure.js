
// impure function
let x=10;
function add(){
    console.log( x)
    x++
}
add()
add()
add()

// pure function
function add(x){
    console.log( x+1)
    return x+2
}
add(10)
add(12)
add(10)
