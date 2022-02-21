// sync
function fun2(){
    console.log("fun2 is start")
}
function fun1(){
    console.log("fun1 is strating")
    fun2()
    console.log("fun1 is end")
}
fun1()

// async
function fun2(){
    setTimeout(()=>{
        console.log("fun2 is start")
    },3000)
    
}
function fun1(){
    console.log("fun1 is strating")
    fun2()
    console.log("fun1 is end")
}
fun1()