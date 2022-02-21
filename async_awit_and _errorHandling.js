// syncy progarme
console.log("start")
function myfun(){
    console.log("it is function")
}
myfun()
console.log("end")


// async programe
console.log("strat")
setTimeout(function (){
    console.log("it is function")
},2000)
console.log("end")

// use callback
console.log("start")
function getName(name,callback){
    setTimeout(()=>
{    console.log("it is inside function")
     callback(name)},2000)
}
let nm=getName("pradnya",function(nm){
    console.log(nm)
})

console.log("end")


// async await
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
async function asyncFunc() {
    let result = await promise;
    console.log(result);
    console.log('hello');
}
asyncFunc();

// asyncawait
const porm=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const roll_no=[1,2,3,4]
            resolve(roll_no)
            // reject("it is fail")
        },2000)
    })
const getElement=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            const obj={
                name:"Pradnya",
                age:26
            }
            resolve(`My name is ${obj.name}.I am ${obj.age}. my roll no is ${indexdata}
            `)
            // reject(`it is rejected`)
    },2000,indexdata)
    })
}
async function getdata(){
    const rollNos=await porm
    console.log(rollNos)

    const biodatas= await getElement(rollNos[1])
    console.log(biodatas)
    
    return biodatas

}
const getname=getdata().then((myname)=>{
    console.log(myname)
})



// errror handling in async await
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});
async function myFunc() {
    try { 
        let result = await promise1; 
        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}
myFunc();


// error handling in async await
const porm=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const roll_no=[1,2,3,4]
        resolve(roll_no)
        // reject("it is fail")
    },2000)
})
const getElement=(indexdata)=>{
return new Promise((resolve,reject)=>{
    setTimeout((indexdata)=>{
        const obj={
            name:"Pradnya",
            age:26
        }
        resolve(`My name is ${obj.name}.I am ${obj.age}. my roll no is ${indexdata}
        `)
        // reject(`it is rejected`)
},2000,indexdata)
})
}

async function getdata(){
    try{
        const rollNos=await porm
        console.log(rollNos)
        
        const biodatas= await getElement(rollNos[1])
        console.log(biodatas1)
        
        return biodatas
    }
    catch(error){
        console.log(`the error : ${error}`)
    }
    // catch(error){
    //     alert(`the error : ${error}`)
    // }


}
const getname=getdata().then((myname)=>{
console.log(myname)
})