
const mainForm = document.getElementById('form-task')


mainForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const taskImputFild = document.getElementById('task-to-do')
  const data = {
    TASK: taskImputFild.value
  }
  console.log('Task salvata :', data);
  
  const newTask = document.createElement('div')
  newTask.classList.add('task-add')


  newTask.innerHTML = `
  <p onclick="taskDone(event)">${data.TASK}</p>
  <button onclick="deleteTask(event)">Cancella</button>
  `
  const sectionForTask = document.getElementById('saved-task') 
  sectionForTask.appendChild(newTask)

  taskImputFild.value = ''

})

const deleteTask = (e) => {
  const clickButton = e.target
  clickButton.parentElement.remove()
}

const taskDone = (e) => {
  const clickP = e.target
  let textTask = document.querySelector('.task-add p')
  textTask.style.textDecoration = 'line-through'
  
}