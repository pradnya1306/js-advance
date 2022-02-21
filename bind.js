const youtube={
    name:"Thapatechnical",
    content:"Programming",
    features:function(){
        console.log(`My fav youtuber is ${this .name}.he make video on  ${ this.content}`)
    }
}
const youtuber=youtube.features.bind(youtube)
youtuber()


const youtube1={
    name:"Thapatechnical1",
    content:"Programming"
}
const youtube2={
    name:"Thapatechnical2",
    content:"Programming"
}
function features (){
    console.log(`My fav youtuber is ${this .name}.he make video on  ${ this.content}`)
}
// const you1=features.bind(youtube1)
// you1()
const you1=features.bind(youtube2)
you1()

const youtube1={
    name:"Thapatechnical1",
    content:"Programming"
}
const youtube2={
    name:"Thapatechnical2",
    content:"Programming"
}
function features (rating){
    console.log(`My fav youtuber is ${this .name}.he make video on  ${ this.content}.i gave him ${rating} star.`)
}
const you1=features.bind(youtube1)
you1(5)


this.x = 1; // "this" here is the global window object in browser
const obj = {
    x: 100,
    getX: function () {
      return this.x;
    },
  };
console.log(obj.getX()); // 100
const retrieveX = obj.getX;
// the function gets invoked at the global scope
console.log(retrieveX()); // 1
  //  Create a new function with 'this' bound to obj
  //  global variable 'x' with obj's property 'x' are two separate entities
const boundGetX = retrieveX.bind(obj);
console.log(boundGetX()); // 100