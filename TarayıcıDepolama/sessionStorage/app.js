// Session Storage - Key ve Value

// Butonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);


function addItem(e){

    sessionStorage.setItem(addKey.value,addValue.value);

}

function deleteItem(e){
    
    sessionStorage.removeItem(deletekey.value);

}

function clearItem(e){

    sessionStorage.clear();

}

