setTimeout(()=>{
    console.log("call to HR")
    setTimeout(()=>{
        console.log("HR inform to Director")
        setTimeout(()=>{
            console.log("Information update")
            setTimeout(()=>{
                console.log("selection process")
            },2000)
        },2000)
    },2000)
},2000)

function getInformation(){
    setTimeout(()=>{
        console.log("call API and get student roll no")
        let Roll_no=[1,2,3,4,5]
        console.log(Roll_no)
        setTimeout((rollno)=>{
            const obj={
                name:"Pradnya",
                age:26    
            }
            console.log(`I am ${obj.name}.I am ${obj.age}year old. My roll no is ${rollno} `)
            setTimeout(()=>{
                obj.gender="Male"
                console.log(`i am a ${obj.gender}`)
            },2000)
        },2000,Roll_no[1])
    },2000)
}
getInformation()