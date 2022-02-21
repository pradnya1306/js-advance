// rest parameter
function sum(a,b,...input){
  console.log(...input)
}
sum(1,3,4,5)



// spread oprator
function sum(x, y, z,...rest) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3, 4];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6
  

// spread
function sum(...a){
    console.log(a)

}
// num=(1,2,3,4)
sum(1,6,8)