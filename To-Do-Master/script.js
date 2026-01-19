
let tasks = [];

const taskContainer = document.querySelector('.task-container');
const addBtn = document.getElementById('add-btn');
let inputBox = document.querySelector('#input');
inputBox.innerHTML = '';

addBtn.addEventListener('click', () => addTask());

function addTask() {
    inputValue = inputBox.value;
    if (inputValue === '') return;
    newTask = {
        id: Date.now(),
        title: inputValue
    }
    tasks.push(newTask);
    viewAll()
    inputBox.value = '';

}

function viewAll() {
    // loop through the array to get the task append to a p in a div
    // add classlist to div to style
    taskContainer.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let para = document.createElement('p');
        para.classList.add('tasky')
        para.textContent = tasks[i].title;
        let taskList = document.createElement('div');
        taskList.appendChild(para);
        taskList.classList.add('task-list');
        taskContainer.appendChild(taskList);
        buttons(taskList)
        //console.log(tasks[i].title)
    }
}

function completeTask() {
    // grub the p tag and draw line through 
    let task = document.querySelector('.tasky');
    task.classList.toggle('line-through')
    // add style to the p tag
    
};


// add buttons for task functionality
function buttons(taskList) {
    // create butttons
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn')
    // append the buttons to the same div
    const taskBtns = document.createElement('div')
    taskBtns.classList.add('task-btns')
    taskBtns.appendChild(deleteBtn)
    taskBtns.appendChild(checkBtn)
    // append the buttons div to the main div 
    taskList.appendChild(taskBtns)

    // append img to each button
    const deleteImg = document.createElement('img');
    deleteImg.src = 'assets/icons/recycle-bin.png';
    deleteBtn.appendChild(deleteImg);

    const checkImg = document.createElement('img');
    checkImg.src = 'assets/icons/checked.png'
    checkBtn.appendChild(checkImg);
}

