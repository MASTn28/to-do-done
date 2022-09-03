'use strict';

// Tom's code under branch tom1

let taskArray = [];

let listTitle = '';

//-------------------- Constructor Function

function Task(text, priority) {
    this.text = text;
    this.priority = priority;
    //this.id = `${taskArray[i]}`;
    taskArray.push(this);
}

//-------------------- Event Listener for submitting Title

let formTitle = document.getElementById('title');
formTitle.addEventListener('submit', newTitle);

//-------------------- Event Handler function for Title

function newTitle(event) {
    event.preventDefault();
    listTitle = event.target.listTitle.value;
    document.getElementById('title').innerHTML = '';
    let getTitle = document.getElementById('h2Title');
    getTitle.innerText = listTitle;

    saveTitle();
    // saveTitle invokes function to save title to local storage.
}

//-------------------- Event Listener for submitting Tasks

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);

//-------------------- Function newTask creates new objects/tasks.

function newTask(event) {

    event.preventDefault(); // prevents refresh
    new Task(event.target.taskName.value, event.target.taskPriority.value); // (text, priority)
    //event.target references something when it's fired, in this case taskName's value.
    let list = document.getElementById('ul');

    let li = document.createElement('li'); // DOM manipulation

    let objectText = taskArray[taskArray.length - 1].text;
    let objectPriority = taskArray[taskArray.length - 1].priority;
    li.innerText = `${objectText}; ${objectPriority}`;
    list.append(li);
    console.log(taskArray);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `${[taskArray.length - 1]}`);
    deleteButton.innerHTML = 'Delete';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', function () {
        li.remove();
        if (deleteButton.id === li.id) {
            // delete object from taskArray
        }

        console.log(taskArray);

    });
}

// deleteButton.addEventListener('submit', deleteTask);
// function deleteTask(event) {
// }

//-------------------- Local Storage stuff

//-------------------- Function saves title to local storage. Invoked in title submission function above.

function saveTitle() {
    let localTitle = JSON.stringify(listTitle);
    return localStorage.setItem('title', localTitle);
}

//-------------------- Event Listener

let localStore = document.getElementById('saveLocal');
localStore.addEventListener('click', saveList);

//-------------------- Function called on click.Turns all array object -> strings

function saveList() {
    let localList = JSON.stringify(taskArray);
    return localStorage.setItem('key', localList);

    // condition to prevent null being saved to localStorage.
}

//-------------------- Event Listener

let getLocal = document.getElementById('getLocal');
getLocal.addEventListener('click', getList);

//-------------------- Function to retrieve key and parse content.

function getList() {
    let retrieve = localStorage.getItem('key');
    if (retrieve) {
        taskArray = JSON.parse(retrieve);
        // alert('Test');

        for (let i = 0; i < taskArray.length; i++) {

            let ul = document.getElementById('printList');
            let text = taskArray[i].text;
            let priority = taskArray[i].priority;

            let li = document.createElement('li');
            li = `${text}. Priority: ${priority}`;
            ul.append(li);
        }
    }
}

//console.log('On the other side of the screen, it all looks so easy.');

//--------------------GLOBAL VARIABLES/IMPORTS
// let listTitle = '';
// let tasks = []; // array to hold Task objects


//--------------------CONSTRUCTORS
// function Task(taskText, taskPriority) {
//     this.text = taskText;
//     this.priority = taskPriority;
//     this.status = '';
// }


//--------------------CONSTRUCTOR METHODS
// prototype method to add additional task

// prototype method to delete task

// prototype method to edit task

// prototype method to change task status


//--------------------FUNCTIONS
// function to load initial index.html form to create new list
//      if local storage = NULL

// function to set local storage

// function to get local storage

// function to render task list

//--------------------EVENT LISTENERS
// event listener for create task list submit (aka render task list)
// let taskForm = document.getElementById('taskForm');
// taskForm.addEventListener('submit', createTaskList);

// event listener for add additional task

// event listener for delete task

// event listener for edit task

// event listener for change task status


//--------------------EVENT HANDLERS
// event handler for create task list submit (aka render task list)
// function createTaskList(event) {
//     event.preventDefault();
//     let taskList = event.target;




    // function call to render task list on screen

    // function call to set task list local storage

// event handler for add new task

// event handler for delete task

// event handler for edit task

// event handler for change task status


//--------------------FUNCTION CALLS
// load page