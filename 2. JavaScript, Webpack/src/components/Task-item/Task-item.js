import Image from '@/components/Image/Image';
import img from '@/assets/img/profile_pic.jpg'


const TaskItem = (name = 'Название', num = 1, ) => {
  
  const html = `
  <div class="item">
  <div class="task-item">
  <div class="task-item__content">
    <div class="task-item__title">
      <span class="task-item__name">${name}</span>
      <img src=${img} class="profile-pic"/>
    </div>
    <div class="task-item__info">
      <span class="task-item__num">#${num}</span>
      <span class="task-item__details">Иванов И.И. создал 1 час назад</span>
      <span class="task-item__status">Черновик</span>
      <span class="task-item__changes">Баранов В.В. изменил 1 минуту назад</span>
    </div>
  </div>
  <div class="dropdown">
    <div class="item__settings dropdown_btn">
     ${Image("icon-dots", "icon-dots")}
    </div>
     <ul class="dropdown__item">
      <li class="dropdown__li">Редактировать</li>
      <li class="dropdown__li" style="color:#EE4222">Удалить</li>
     </ul>
    </div>
  </div>
  </div>
  </div>
  `

  return html
}

export default TaskItem