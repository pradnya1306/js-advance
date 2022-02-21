function sum(){
    console.log(arguments[0])
    console.log(arguments[1])
}
sum(1,2,3)


// use length
function sum(){
    // console.log(arguments[0])
    console.log(arguments.length)
}
sum(1,2,3)

function sum(){
    if (arguments.length==0){
        console.log("no arguments passed")
    }
    else{
        sum=0
        for (i of arguments){
            sum=sum+i
        }
        console.log(sum)
    }
}

sum(1,2,3)


// use callee
function sum(a,b,c){
    console.log(arguments.calllee)
}
sum(1,2,3)

const data=[["a",1],["b",2]]
// output={"a":1,"b:2"}
dic={}
for (i of data){
    for (j=0;j<i.length-1;j++){
         dic[i[j]]=i[j+1]
    } 
}
console.log(dic)

var s=require("readline-sync")
num1=s.questionInt("enter 1st no")
num2=s.questionInt("entre the 2nd no")
list=[num1,num2]
sum=0
for (j of list){
    sum=sum+j
}
// console.log(sum)

for(i of list){
    d=(list.includes(50))
    if ((d==true)||(sum==50)){
        console.log("true")
        break
    }
    
    else{
        console.log("false")
        break
    }
}