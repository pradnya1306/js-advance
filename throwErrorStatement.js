const number=70
try{
    if (number>50){
        console.log("success")
    }
    else{
        throw new Error("it is below")
    }
    console.log("hello")
}
catch(error){
    console.log("error massage:"+ error)
}

