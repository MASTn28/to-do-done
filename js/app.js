'use strict';

let taskArray = [];
let listTitle = '';

//-------------------- Constructor Function

function Task(text, priority) {
    this.text = text; // store task name/description
    this.priority = priority; // store task priority
    this.completed = false; // store task completion status
    taskArray.push(this); // add task to new last element of taskArray
}

//-------------------- Event Listener for submitting Title

let formTitle = document.getElementById('title');
formTitle.addEventListener('submit', newTitle);

//-------------------- Event Handler function for Title

function newTitle(event) {
    event.preventDefault();
    if (event.target.listTitle.value.length < 1){
        alert('Please enter a title for you to-do list');
    } else {
        listTitle = event.target.listTitle.value;
        document.getElementById('title').innerHTML = '';
        let getTitle = document.getElementById('h2Title');
        getTitle.innerText = listTitle;
        saveTitle();
        // saveTitle invokes function to save title to local storage.
    }
}

//-------------------- Event listener for adding a new task

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);

//-------------------- Function newTask To Add New Task Item

function newTask(event) {
    // prevent page refresh
    event.preventDefault();
    // input validation
    if (event.target.taskName.value.length < 1) {
        alert('Please enter a task name');
    } else {
        //create new Task with user's input values
        new Task(event.target.taskName.value, event.target.taskPriority.value); // (text, priority)
        // print task list on screen
        renderList();
    }
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
        li.innerText = `${objectText} - Priority: ${objectPriority}`;
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
    // write taskArray to local storage
    let localList = JSON.stringify(taskArray);
    // modify text displayed on saveLocal button when user clicks it
    let saveButton = document.getElementById('saveLocal');
    saveButton.innerHTML = 'List Saved';
    // reset saveLocal button after 3 seconds to original text
    setTimeout(() => {
        saveButton.innerHTML = 'Save List';
    }, 3000);
    // return local storage
    return localStorage.setItem('key', localList);

    // condition to prevent null being saved to localStorage.
}

//-------------------- Event Listener

let getLocal = document.getElementById('getLocal');
getLocal.addEventListener('click', getList);

//-------------------- Function to retrieve key and parse content.

function getList() {
    document.getElementById('printList').innerHTML = '';
    document.getElementById('printTitle').innerHTML = JSON.parse(localStorage.getItem('title'));

    let retrieve = localStorage.getItem('key');
    if (retrieve) {
        taskArray = JSON.parse(retrieve);
        // alert('Test');

        for (let i = 0; i < taskArray.length; i++) {

            let ul = document.getElementById('printList');
            let text = taskArray[i].text;
            let priority = taskArray[i].priority;

            let status = taskArray[i].completed;

            let li = document.createElement('li');
            li.innerText = `${text} - Priority: ${priority} - Completed: ${status}`;
            ul.append(li);

        }
    }
}

//--------------------------- Used W3schools.com tutorial to add strikethrough

let list = document.getElementById('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
    // tagname returns a tag name that is in uppercase.
        ev.target.classList.toggle('checked');
        // update object property completed to true
        let index = Number((ev.target.id).substring(4));
        if (taskArray[index].completed === false) {
            taskArray[index].completed = true;
        } else {
            taskArray[index].completed = false;
        }
    }
}, false);
