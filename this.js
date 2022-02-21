// console.log(this)


// in method this is the owner of the object
const obj={
    name:"pradnya",
    sum:function(){
        c=10;
    console.log(c)
    console.log(this)
    }
}
obj.sum()