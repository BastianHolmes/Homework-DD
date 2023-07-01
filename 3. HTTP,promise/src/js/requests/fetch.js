const config = require("@/js/requests/TOKEN")

function sendRequestFetch(url, method, data) {
  const options = {
    method: method,
    headers: {
      'authorization': `Bearer ${config.token}`,
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Request failed');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function Fetch() {
  let projectID = ''
  let taskID = ''
  let checkState = false

  document.addEventListener('DOMContentLoaded', () => {
    let requestURL = config.Projects

    document.addEventListener('click', () => {
      let isTasks = document.querySelector('.tasks').classList.contains('btn_active')
      if (isTasks) {
        requestURL = config.Tasks
      }
      else {
        requestURL = config.Projects
      }
      checkState = isTasks
    })
    

    //Создание
    document.querySelector('.fetch-post').addEventListener('click', () => {     
      sendRequestFetch(
      requestURL,
      'POST',
      checkState ? 
      {
      "name": "String",
      "description": "String",
      "projectId": `${projectID}`,
      "executor": "id"
      } :
      {
      "name": "Name of someth",
      "code": "Someth"
      } 
      ).then(data => {
          projectID = data._id
          taskID = data._id
          authorID = data.author
          console.log(JSON.stringify(data))
          })
          .catch(err => console.log(err))
      })
      
    //Получение
      document.querySelector('.fetch-get').addEventListener('click', () => {
        sendRequestFetch(checkState? requestURL+taskID : requestURL+projectID, 'GET')
          .then(data => {
            console.log(JSON.stringify(data))
          })
          .catch(err => console.log(err))
      })
    
    //Редактирование
    document.querySelector('.fetch-put').addEventListener('click', () => {
      sendRequestFetch(requestURL,'PUT',
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
       document.querySelector('.fetch-delete').addEventListener('click', () => {
        sendRequestFetch( checkState? requestURL+taskID : requestURL+projectID, 'DELETE')
          .then(data => console.log(JSON.stringify(data)))
          .catch(err => console.log(err))
      })
    })
}


Fetch()