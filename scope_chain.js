x=0
y="this is my channel"
console.log(x)

a()
function a(){
    localvar1="share this video"
    y1="check this y1 inside  a"
    console.log(x)
    b()
    function b(){
        localvar2="like this channel"
        y2="check this y2 inside b"
        console.log(x)

        c()
        function c(){
            localvar3="subscribe my channel"
            y3="check this y3 inside c"
            console.log(x)

            console.log(y3)
            console.log(y2)
            console.log(y1)
        }
    }
    
}