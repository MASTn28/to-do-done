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

    let deleteButton = document.createElement('button1');
    deleteButton.innerHTML = 'Delete';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        li.remove();
        delete taskArray[taskArray.length - 1];
    });
}
