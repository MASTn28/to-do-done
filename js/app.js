'use strict';

//console.log('On the other side of the screen, it all looks so easy.');

//--------------------GLOBAL VARIABLES/IMPORTS
let listTitle = '';
let tasks = []; // array to hold Task objects


//--------------------CONSTRUCTORS
function Task(taskText, taskPriority) {
    this.text = taskText;
    this.priority = taskPriority;
    this.status = '';
}


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
let taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', createTaskList);

// event listener for add additional task

// event listener for delete task

// event listener for edit task

// event listener for change task status


//--------------------EVENT HANDLERS
// event handler for create task list submit (aka render task list)
function createTaskList(event) {
    event.preventDefault();
    let taskList = event.target;




    // function call to render task list on screen

    // function call to set task list local storage
}

// event handler for add new task

// event handler for delete task

// event handler for edit task

// event handler for change task status


//--------------------FUNCTION CALLS
// load page
