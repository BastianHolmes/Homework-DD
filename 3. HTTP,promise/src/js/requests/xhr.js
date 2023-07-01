const config = require("@/js/requests/TOKEN")

function sendRequest(method, url, body = null) {
  return new Promise(async(resolve, reject) => {
    const xhr =  new XMLHttpRequest()

    xhr.open(method, url)

    xhr.responseType = 'json'
    xhr.setRequestHeader("authorization", `Bearer ${config.token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }

    xhr.onerror = () => {
      reject(xhr.response)
    }

    xhr.send(JSON.stringify(body))
  })
}

function XMR() {

  let checkState = false

  document.addEventListener("DOMContentLoaded", () => {
    let requestURL = config.Projects
    let projectID = ''
    let taskID = ''

    document.addEventListener('click', () => {
      let isTasks = document.querySelector('.tasks').classList.contains('btn_active')
      if (isTasks) {
        requestURL = config.Tasks
      } else {
        requestURL = config.Projects
      }
      checkState = isTasks
    })

    //Создание
    document.querySelector('.xhr-post').addEventListener('click', () => {
      
      sendRequest(
        'POST',
        requestURL,
        checkState ? 
          {
            "name": "String",
            "description": "String",
            "projectId": `${projectID}`,
            "executor": "id"
          } : {
            "name": "Name of someth",
            "code": "Someth"
          })
        .then(data => {
          projectID = data._id
          taskID = data._id
          authorID = data.author
          console.log(JSON.stringify(data))
        })
        .catch(err => console.log(err))
    })

    //Получение
    document.querySelector('.xhr-get').addEventListener('click', () => {
      sendRequest('GET',checkState? requestURL+taskID : requestURL+projectID, {})
        .then(data => console.log(JSON.stringify(data)))
        .catch(err => console.log(err))
    })

    //Редактирование
    document.querySelector('.xhr-put').addEventListener('click', () => {
      sendRequest('PUT', requestURL,
        checkState ?
        {
            "_id": `${taskID}`,
            "name": "String",
            "description": "String",
            "projectId": `${projectID}`,
            "executor": `${authorID}`,
            "status": "IN_PROCESS" 
        } :
        {
          "_id": `${projectID}`,
          "name": "String",
          "code": "String"
        })
        .then(data => console.log(JSON.stringify(data)))
        .catch(err => console.log(err))
    })

    //Удаление
    document.querySelector('.xhr-delete').addEventListener('click', () => {
      sendRequest('DELETE', checkState? requestURL+taskID : requestURL+projectID, {})
        .then(data => console.log(JSON.stringify(data)))
        .catch(err => console.log(err))
    })

  })
}

XMR()