tasks = [
    {
        id: 1,
        title: 'Finish my 5 projects by 25th of Jan'
    },

    {
        id: 2,
        title: 'Check Up on close friends'
    }
]

const taskContainer = document.querySelector('.task-container')

function viewAll() {
    // loop through the array to get the task append to a p in a div
    // add classlist to div to style
    for (let i =0; i<tasks.length; i++) {
        let para = document.createElement('p');
        para.textContent = tasks[i].title;
        let taskList = document.createElement('div');
        taskList.appendChild(para);
        taskList.classList.add('task-list');
        taskContainer.appendChild(taskList);
        buttons(taskList)
        //console.log(tasks[i].title)
    }
    
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
}

viewAll()