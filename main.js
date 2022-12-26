// global variable for div ToDoTask
const Todo_el = document.getElementById('ToDoTask')

// function for adding task to list
function addTask(task) {

    const task_el = document.createElement('div')
    task_el.classList.add('task-card')
    //content for element
    task_el.innerHTML = `
        <h2>${task}</h2>

    `
    // add to page
    Todo_el.appendChild(task_el)
}

const form_el = document.getElementById('ToDoForm')
form_el.addEventListener('submit', (event) => {
    // to prevent page refreshing
    event.preventDefault()
    // get access to the task to pass it in the function 
    let nameInput = document.getElementsByName('task')[0]

    // use vales to call the add task function
    addTask(nameInput.value)
    // clear value from input after you submit
    nameInput.value = " "



})

// get acces to button by declaring variable
const clearBtn = document.getElementById('clear')
// on click listener
clearBtn.addEventListener('click', (event) =>{
    Todo_el.innerHTML=" "


})

