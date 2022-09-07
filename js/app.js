'use strict';

// Tom's code under branch tom1

let taskArray = [];
let listTitle = '';

//-------------------- Constructor Function

function Task(text, priority) {
    this.text = text; // store task name/description
    this.priority = priority; // store task priority
    this.completed; // store task completion task
    taskArray.push(this); // add task to new last element of taskArray
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

//-------------------- Event listener for adding a new task

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);

//-------------------- Function newTask To Add New Task Item

function newTask(event) {
    // prevent page refresh
    event.preventDefault();
    //create new Task with user's input values
    new Task(event.target.taskName.value, event.target.taskPriority.value); // (text, priority)
    // print task list on screen
    renderList();
    // reset the add task form to blank/default fields
    document.getElementById('add').reset();
}

function renderList() {
    // clear task list of any previously rendered tasks
    document.getElementById('ul').innerHTML = '';
    // select <ul> element for DOM manipulation
    let list = document.getElementById('ul');
    // create vars for DOM manipulation
    let li;
    //let deleteButton;

    // loop through taskArray to print each task's properties on screen
    for(let i = 0; i < taskArray.length; i++) {
        // assign html element and attributes for li
        li = document.createElement('li');
        li.setAttribute('class', 'taskItem');
        li.setAttribute('id', `task${[i]}`);

        // assign task properties to li.innertext to be printed on-screen and append li to list
        let objectText = taskArray[i].text;
        let objectPriority = taskArray[i].priority;
        li.innerText = `${objectText}; ${objectPriority}`;
        list.append(li);

        // assign html element and attributes for deleteButton
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.setAttribute('id', `delete${[i]}`);
        deleteButton.innerHTML = 'Delete';
        // add event listener for deleteButton
        deleteButton.addEventListener('click', deleteTask);
        // append deleteButton to li
        li.appendChild(deleteButton);
    }
    console.log(taskArray);
    console.log(list);
}

//-------------------- Event handler for deleting a task

function deleteTask(event){
    // get task Id # to be deleted from event.target
    let targetId = (event.target.id).substring(6);
    let targetLi = 'task' + targetId;
    // remove deleted task from the rendered list
    let deletedTask = document.getElementById(targetLi);
    deletedTask.remove();
    // remove deleted task from taskArray
    delete taskArray[targetId];
    // clear taskArray of now empty indices
    taskArray = taskArray.filter(Boolean);
    // re-render task list
    renderList();
}

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

// Used W3schools.com tutorial to add strikethrough
let list = document.getElementById('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//console.log('On the other side of the screen, it all looks so easy.');
