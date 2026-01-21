
let tasks = [];

const taskContainer = document.querySelector('.task-container');
const addBtn = document.getElementById('add-btn');
let inputBox = document.querySelector('#input');
inputBox.innerHTML = '';


addBtn.addEventListener('click', () => addTask());


function addTask() {
    inputValue = inputBox.value;
    if (inputValue === '') return;
    let newTask = {
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
        createTaskButtons(taskList)
        //console.log(tasks[i].title)
        // CHAT CODE
        taskList.dataset.id = tasks[i].id;
        
    }   
}


// add createTaskButtons for task functionality
function createTaskButtons(taskList) {
    // create butttons
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn')
    // append the createTaskButtons to the same div
    const taskBtns = document.createElement('div')
    taskBtns.classList.add('task-btns')
    taskBtns.appendChild(deleteBtn)
    taskBtns.appendChild(checkBtn)
    // append the createTaskButtons div to the main div 
    taskList.appendChild(taskBtns)

    // append img to each button
    const deleteImg = document.createElement('img');
    deleteImg.src = 'assets/icons/recycle-bin.png';
    deleteBtn.appendChild(deleteImg);

    const checkImg = document.createElement('img');
    checkImg.src = 'assets/icons/checked.png'
    checkBtn.appendChild(checkImg);

    checkBtn.addEventListener('click', function () {
        const task = taskList.querySelector('.tasky');
        task.classList.toggle('line-through');
    });

    // CHAT CODE AND IDEA ONLY THIS func....
    deleteBtn.addEventListener('click', function() {
        const taskId = Number(taskList.dataset.id);

        //remove from 
        tasks = tasks.filter(task => task.id !== taskId);

        // remove from DOM
        taskList.remove();
    })
} 

