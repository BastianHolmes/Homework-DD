
import Image from '../Image/Image';


const ProjectItem = (name = 'Название', num = 1, ) => {
  
  const html = `
  <div class="item">
  <div class="project-item">
  <div class="project-item__content">
    <span class="project-item__name">${name}</span>
    <div class="project-item__info">
      <span class="project-item__num">#${num}</span>
      <span class="project-item__details">Иванов И.И. создал 1 час назад</span>
      <span class="project-item__changes">Баранов В.В. изменил 1 минуту назад</span>
    </div>
  </div>
  <div class="item__settings dropdown">
  ${Image("icon-dots", "icon-dots")}
  <ul class="dropdown__item dropdown__item_change">
    <li class="dropdown__li">Редактировать</li>
    <li class="dropdown__li" style="color:#EE4222">Удалить</li>
  </ul>
  </div>
  </div>
  </div>
  `

  return html
}

export default ProjectItem