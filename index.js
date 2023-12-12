let BtnStorage = document.getElementById("button")
let InputStorage = document.getElementById("input")
let todolist = document.getElementById("todolist")
let AllToDoStorageinarr = [];

BtnStorage.addEventListener("click", function(){
    let Inputtake = InputStorage.value;
    
    AllToDoStorageinarr.push(Inputtake);

    displayTodo(AllToDoStorageinarr);

});

function displayTodo(ArrayofToDo){
    todolist.innerHTML = ""
    ArrayofToDo.forEach(function(element, index){
            todolist.innerHTML += `<li class="eachToDo">
            <span>${element}</span>    
            <span class="editndremove">    
            <span onclick="RemoveToDo(${index})">X</span>    
            <span onclick="EditToDo(${index})">/</span>    
            </span>
        </li>`;
    });
}


function RemoveToDo(indexofarray){
    AllToDoStorageinarr.splice(indexofarray, 1);
    displayTodo(AllToDoStorageinarr);
}




function EditToDo(indexofarray){
    let promptvalue = prompt("Enter whatchu wanna edit");
    AllToDoStorageinarr[indexofarray] = promptvalue;
    displayTodo(AllToDoStorageinarr);
}