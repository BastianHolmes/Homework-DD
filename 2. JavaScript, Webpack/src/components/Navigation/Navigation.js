import Button from '../Button/Button'

const Navigation = () => {
    const html = `
    <header class="navigation">
      ${Button('Проекты')}
      ${Button('Задачи')}
      ${Button('Пользователи')}
      ${Button('', 'btn_profile', true)}
    </header>
    `
  return html
}

export default Navigation