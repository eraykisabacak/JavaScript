const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");


// Click Event

//  title.addEventListener("click",run);

// function run(e){

//     console.log(e.type);

// }

// // Double Click
// title.addEventListener("dblclick",rundbl);

// Mouse Down
// title.addEventListener("mousedown",run);

// Mouse Up
// title.addEventListener("mouseup",run);

// Mouse Over Üstüne gelindiğinde 
//title.addEventListener("mouseover",run);

// Mouse Out Üstünden gidildiğinde çıkar
// title.addEventListener("mouseout",run);

// Mouse Enter ve Mouse Leave
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);



function run(e){

    console.log(e.type);

}


