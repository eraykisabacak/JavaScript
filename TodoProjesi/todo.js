// Tüm elementleri seçme

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){ // Tüm event listenerler
    
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI); // Sayfa Yüklendikten Sonra olacak olan
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){

    if(confirm("Tümünü Silmek istediğinize emin misiniz ?")){
        // Arayüzden todoları temizleme
        //todoList.innerHTML = ""; // Yavaş

        while( todoList.remove(todoList.firstElementChild) != null){
            todoList.remove(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }

}


function filterTodos(e){

    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();

        if(text.indexOf(filterValue) === -1){
            // Bulamadı          
            listItem.setAttribute("style","display : none !important");

        }
        else{

            listItem.setAttribute("style","display : block !important");

        }
        

    });


}


function deleteTodo(e){

    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);

        showAlert("success","Todo başarıyla silindi...");

    }

}
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); // Arrayden değeri silebiliriz.
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

} 
function loadAllTodosToUI(){ // Sayfa Yüklendikten sonra storage'dakiler yazdırılıyor

    let todos = getTodosFromStorage();

    todos.forEach(function(todo){

        addTodoToUI(todo);

    });

}
function addTodo(e){

    const newTodo = todoInput.value.trim();
    const totalTodos = document.querySelectorAll(".list-group-item");
    let text;
    let kontrol;
    if(newTodo === ""){
        
        showAlert("danger","Lütfen bir todo girin...");

    }
    else{
        totalTodos.forEach(function(todo){ 
            text = todo.textContent;
            if(text === newTodo){ // Aynı input girilmiş mi kontrolü
                kontrol = true;
            }
        });
        
        if(kontrol != true){
            addTodoToUI(newTodo);
            addTodoToStorage(newTodo);
            showAlert("success","Todo başarı ile eklendi");
        }else{
            showAlert("danger","Lütfen farklı bir todo giriniz");
        }

    }

    e.preventDefault(); // Sayfa Yenilenmemesi için
}
function getTodosFromStorage(newTodos){ // Storagedan Todoları Alma

    let todos;

    if(localStorage.getItem("todos") === null){

        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        
    }
    return todos;

}
function addTodoToStorage(newTodo){

    let todos = getTodosFromStorage();   

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

}
function showAlert(type,message){
    
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    firstCardBody.appendChild(alert);

    // setTimeout -- Belirli bir saniye bekler daha sonra fonksiyon çalışır.
    window.setTimeout(function(){
        alert.remove();
    },3000);
    



}
function addTodoToUI(newTodo){ // String değerini list item olarak UI'ya ekleyecek.
    
  /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>*/

    // List item oluşturma
    const listItem = document.createElement("li");
    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
   link.innerHTML = "<i class = 'fa fa-remove'></i>"

   listItem.className = "list-group-item d-flex justify-content-between";
    
    // Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

  // Todo List'e List Item'ı Ekleme

  todoList.appendChild(listItem);

  // Girilen Input Silme

  todoInput.value = "";


   


}



