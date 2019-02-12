// Set Timeout

// setTimeout(function(){

//     console.log("Merhaba");

// },4000);

// Set Interval

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Merhaba",i);


},1000);

document.getElementById("btn").addEventListener("click",function(){

    clearInterval(value);

});

// Clear Interval

