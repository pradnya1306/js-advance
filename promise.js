// 1.programe with promis
const  count=false
const fun= new Promise(function(resolve,reject){
    if(count){
        resolve("I am sucessful")
    }
    else{
        reject("i am not sucess")
    }
})
console.log(fun)

// // 2.
function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("fetch the data from API.")
        setTimeout(()=>{
            if (complete){
                resolve("it is sucessfull")
            }
            else{
                reject("it is not sucess")
            }
        },2000)
        
    })
}
prom(true).then(function onffullfill(result){
    console.log(result)
})
.catch(function onreject (error){
    console.log(error)
}) 
.finally(()=>{
    console.log("cleaned up")
})

// 3.
const porm=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const roll_no=[1,2,3,4]
        resolve(roll_no[1])
        // reject("it is fail")
    },2000)
})
porm.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})


// 4.
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
porm.then((rollno)=>{
    console.log(rollno)
    return getElement(rollno[1])
}).then((kuchbhi)=>{
    console.log(kuchbhi)
})
.catch((error)=>{
    console.log(error)
})


// 5.
// console.log("start")
// function getName(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("it is getname inner")
//             resolve(name)
//         },2000)
//     })
// }
// function getHobbies(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           console.log("it is gethobbies")
//           resolve(["cricket", "hocky"])
//         },2000)
//     })
// }
// getName("sonam")
// .then(nm=getHobbies(nm))
// .then(hobby=>console.log(hobby))
// console.log("end")