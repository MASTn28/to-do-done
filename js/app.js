'use strict';

//-------------------- Global Variables

let taskArray = []; // array to hold user's created to-do list tasks
let listTitle = ''; // user specified name for their to-do list
let taskCount = 0; // counter for user created to-do list task

//-------------------- Constructor Function

function Task(text, priority) {
    this.text = text;
    this.priority = priority;
    taskArray.push(this);
    taskCount++;
}

//-------------------- Adds Event Listeners with submit and function arguments

let formTitle = document.getElementById('title');
formTitle.addEventListener('submit', newTitle);

//-------------------- Event Handler function for Title

function newTitle(event) {
    event.preventDefault();
    listTitle = event.target.listTitle.value;
    document.getElementById('title').innerHTML = '';
    let getTitle = document.getElementById('h2Title');
    getTitle.innerText = listTitle;
}

//-------------------- Event Listener To Add New Task Item

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);

//-------------------- Event Handler To Add New Task Item

function newTask(event) {

    event.preventDefault(); // prevents refresh
    new Task(event.target.taskName.value, event.target.taskPriority.value); // (text, priority)
    //event.target references something when it's fired, in this case taskName's value.
    let list = document.getElementById('ul');

    let li = document.createElement('li'); // DOM manipulation
    li.setAttribute('class', 'taskItem');
    li.setAttribute('id', `task${[taskArray.length - 1]}`);

    let objectText = taskArray[taskArray.length - 1].text;
    let objectPriority = taskArray[taskArray.length - 1].priority;
    li.innerText = `${objectText}; ${objectPriority}`;
    list.append(li);
    console.log(taskArray);

    // add Delete button to newly added task item
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.setAttribute('id', `delete${[taskArray.length - 1]}`);
    deleteButton.innerHTML = 'Delete';
    li.appendChild(deleteButton);

    // event listener and handler for deleteButton
    deleteButton.addEventListener('click', function() {
        li.remove();
        console.log(li.id);
        let index = Number(li.id.substring(4));
        console.log(index);

        delete taskArray[index];
        taskArray = taskArray.filter(Boolean);

        console.log(taskArray);

    });
}
