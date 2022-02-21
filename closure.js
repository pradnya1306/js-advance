// lexical scope
const outerfun=(a)=>{
    let b=10;
    const innerfun=()=>{
        let sum=a+b;
        console.log (`The sum is ${sum}`)
    }
    innerfun()
}
outerfun(5)


closure
const outerfun=(a)=>{
    let b=10;
    const innerfun=()=>{
        let sum=a+b;
        console.log (`The sum is ${sum}`)
    }
    innerfun()
}
const data=outerfun(5)
console.log(data)

// clouser
function interview(name){
    return function candidate(topic){
        if (name=="Pradnya"){
            console.log(`Hi ${name}.please explain ${topic}`)
        }
        else if (name=="namrata"){
            console.log(`Hi ${name}.please explain ${topic}`)
        }
        else if (name=="pooja"){
            console.log(`Hi ${name}.please explain ${topic}`)
        }
        else{
            console.log(`Welcome  to PP company`)
        }
    }
}
interview("Pradnya")("python")