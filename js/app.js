'use strict';

// Tom's code under branch tom1

let taskArray = [];

let listTitle = '';

//-------------------- Constructor Function

function Task(text, priority) {
    this.text = text;
    this.priority = priority;
    taskArray.push(this);
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

//--------------------

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);

//--------------------

function newTask(event) {

    event.preventDefault();    //prevents refresh
    new Task(event.target.taskName.value, event.target.taskPriority.value); // (text, priority)
    //event.target references something when it's fired, in this case taskName's value.
    let list = document.getElementById('ul');

    let li = document.createElement('li'); // DOM manipulation
    li.innerText = event.target.taskName.value + '; ' + event.target.taskPriority.value;
        // 
    list.append(li);
    console.log(taskArray);
}

//



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


//-------------------- Tom's JS.

