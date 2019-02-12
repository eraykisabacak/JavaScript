const filterInput = document.getElementById("filter");

const todoForm = document.getElementById("todo-form");


todoForm.addEventListener("submit",function(){

    console.log("Eyvallah Gönderildi");

});

todoForm.addEventListener("submit",submitForm);

function submitForm(e){

    console.log("Eyvallah Gönderdinn...");


    e.preventDefault();// Default olan özellik yok oldu sayfa yenilenmedi

}



//const todolar = document.getElementById("todolar-p-etiketi");
// filterInput.addEventListener("focus", function(e){

//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     e.target.placeholder = "Hadi Buraya Birşeyler Yaz";
//     console.log(e.target.placeholder);
//     console.log(todolar);
//     console.log(e.target.className);
//     // console.log("Naber");

// });
// filterInput.onfocus = function(){

//     console.log("Naber");

// }




