const fs=require("fs")
//open and write file
fs.writeFile("pradnya.txt","My name is Pradnya",(err)=>{
    console.log("file created")
    console.log(err)
})

// append file
fs.appendFile("pradnya.txt"," i am student",(err)=>{
    console.log("append file")
    console.log(err)
})

// read file
fs.readFile("pradnya.txt","utf-8",(err,data)=>{
    console.log(data)
})

rename
fs.rename("pradnya.txt","unmesh.txt",(err)=>{
    console.log("rename file")
    console.log(err)
})

// delete file
fs.unlink("unmesh.txt",(err)=>{
    console.log("delete file")
    console.log(err)
// })

 
fs.open("pradnya.txt","w",(err)=>{
    console.log("created file")
    console.log(err)
})
