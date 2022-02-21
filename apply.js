const youtube={
    name:"Thapa",
    content:"programming", 
    features:function(rating,support){
        console.log(`my fav youtuber is ${this.name}.he made videos on ${this.content}.
         i gave ${rating} star. please ${support}`)
    }  
}
const youtube1={
    name:"Thapa1",
    content:"programming1", 
}
youtube.features.call(youtube1,5,"subscribe")
youtube.features.apply(youtube1,[5,"subscribe"])

a=Math.max(1,8,3,4)
console.log(a)
b=Math.max.apply(null,[2,6,3,9,1])
console.log(b)

let letters = ["a", "b", "c"];
let other_letters = ["d", "e"];
// array implementation
for (letter of other_letters) {
  letters.push(letter);
}
console.log(letters); // [ 'a', 'b', 'c', 'd', 'e' ]
letters = ["a", "b", "c"];
// using apply()
letters.push.apply(letters, other_letters);
console.log(letters); // [ 'a', 'b', 'c', 'd', 'e' ]