// set interval 1.
function greet() {
    console.log('Hello world');
}
setInterval(greet, 1000);

2.
// program to display time every 5 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time)
}

let display = setInterval(showTime, 5000);


//clear interval 1.

let count = 0
let interval = setInterval(function(){
    count += 1;
    if(count === 5){
        clearInterval(interval);
    }
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);

}, 2000);


count=0
interval=setInterval(() => {
    count=count+1
    if (count==3){
        clearInterval(interval)
    }
    
        console.log("hello world")
        
    
}, 2000);