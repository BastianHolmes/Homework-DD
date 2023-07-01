const config = require("@/js/requests/TOKEN")

import axios from 'axios';

async function sendRequestAxios(url, method, data) {
  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      headers: {
        "authorization": `Bearer ${config.token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

function Axios() {

  let checkState = false

  document.addEventListener('DOMContentLoaded', () => {
    let requestURL = config.Projects
    let projectID = ''
    let taskID = ''

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
    document.querySelector('.axios-post').addEventListener('click', () => {
      sendRequestAxios(
      requestURL,
      'POST',
      checkState ? 
      {
      "name": "String",
      "description": "String",
      "projectId": `${projectID}`,
      "executor": "id"
      } : {
      "name": "Name of someth",
      "code": "Someth"
      }).then(data => {
          projectID = data._id
          taskID = data._id
        console.log(JSON.stringify(data))
      })
        .catch(err => console.log(err))
      })
      
    //Получение
      document.querySelector('.axios-get').addEventListener('click', () => {
        sendRequestAxios(checkState? requestURL+taskID : requestURL+projectID, 'GET')
          .then(data => console.log(JSON.stringify(data)))
          .catch(err => console.log(err))
      })
    
    
    //Редактирование
    document.querySelector('.axios-put').addEventListener('click', () => {
      sendRequestAxios(requestURL,'PUT',
        checkState ?
        {
            "_id": `${taskID}`,
            "name": "String",
            "description": "String",
            "projectId": `${projectID}`,
            "executor": ``,
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
       document.querySelector('.axios-delete').addEventListener('click', () => {
        sendRequestAxios( checkState? requestURL+taskID : requestURL+projectID, 'DELETE')
          .then(data => console.log(JSON.stringify(data)))
          .catch(err => console.log(err))
      })
    })
}


Axios()