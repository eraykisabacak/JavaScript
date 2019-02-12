// Klavye Eventleri

// keypress

// document.addEventListener("keypress",run);

// function run(e){
//    // console.log(e.which);
//     console.log(e.key);
// }

// keydown

// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which);
//      console.log(e.key);
//  }


// keyup

// document.addEventListener("keyup",run); // tuşa basılıp bırakıldığı zaman karşımıza çıkar


// function run(e){

//     // console.log(e.which);
//     console.log(e.key);

// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);
// header.textContent = null;
function changeText(e){

    header.textContent = e.target.value;
    //console.log(e.target.value);
    

}

console.log(todo);
console.log(header);



