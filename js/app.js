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

//-------------------- Event Listener To Add New Task Item

let formAdd = document.getElementById('add');
formAdd.addEventListener('submit', newTask);


//-------------------- Function newTask To Add New Task Item

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
