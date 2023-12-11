document.getElementById('bnt-save').addEventListener('click', createTask)
const taskList = document.querySelector('.tasks-list')
const p = document.querySelectorAll('form p')
let arrayTasks = []

function createTask(e) {
    e.preventDefault()

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    let task = {
        title: title,
        description: description
    }

    document.getElementById('title').value = ''
    document.getElementById('description').value = ''

    if(title === '' || description === '') {
        p.forEach(message => message.removeAttribute('hidden'))
    } else {
        p.forEach(message => message.setAttribute('hidden', 'hidden'))
        arrayTasks.push(task)
    }
    getTask()
}

function getTask() {
    taskList.innerHTML = ''
    for(let i = 0; i < arrayTasks.length; i++) {
        taskList.innerHTML += ` <div class="card">
            <h2>${arrayTasks[i].title}</h2>
            <p>${arrayTasks[i].description}</p>
            <button class="btn-update" onclick="updateTask('${i}')">Update</button>
            <button class="btn-delete" onclick="deleteTaks('${i}')">Delete</button>
        </div>
        `
    }
}

function updateTask(index) {
    const title = prompt('Ingrese el titulo')
    const description = prompt('Ingrese la description')

    if(title !== '' || description !== '') {
        arrayTasks[index].title = title
        arrayTasks[index].description = description
    }

    getTask()
}

function deleteTaks(index) {
    arrayTasks.splice(index, 1)
    getTask()
}