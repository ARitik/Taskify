//Selectors
const toDoList = document.querySelector('.todo-list');
const addTask = document.querySelector('.todo-button');
const toDoInput = document.querySelector('.todo-input');


//Event Listeners
addTask.addEventListener('click',ToDoEntry);



function ToDoEntry(e) {
    e.preventDefault(); //Prevent Page Reload
    //Create elements
    const newDiv = document.createElement('div');
    const newItem = document.createElement('li');
    const completedButton = document.createElement('button');
    const removeButton = document.createElement('button');

    //adding classes
    newDiv.classList.add("todo-item");
    newItem.classList.add("todo");
    completedButton.classList.add("complete-btn");
    removeButton.classList.add("remove-btn");

    //Adding local event listeners
    removeButton.addEventListener('click',manipulateElement);
    completedButton.addEventListener('click',manipulateElement);

    //Fill Elements
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    removeButton.innerHTML = '<i class="fas fa-times"></i>';
    newItem.innerText = toDoInput.value;

    //Nesting Elements
    newDiv.appendChild(newItem);
    newDiv.appendChild(completedButton);   
    newDiv.appendChild(removeButton);   

    //Append modeled div to todolist
    toDoList.appendChild(newDiv);

    //Clear value
    toDoInput.value = "";
}

function manipulateElement(e) {
    const mItem = e.target;
    //Delete todo
    if(mItem.classList[0] === "remove-btn") {
        const removeItem = mItem.parentElement;
        removeItem.classList.add('fall');
        removeItem.addEventListener('transitionend',function(){
            removeItem.remove();
        })
    }

    if(mItem.classList[0] === "complete-btn") {
        const completeItem = mItem.parentElement;
        completeItem.classList.toggle('completed');
    }


}

