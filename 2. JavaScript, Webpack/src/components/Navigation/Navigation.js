import Button from '@/components/Button/Button';
import ProfileButton from "@/components/Button/ProfileButton";

const Navigation = () => {
    const html = `
    <header class="navigation">
      ${Button('Проекты')}
      ${Button('Задачи')}
      ${Button('Пользователи')}
      ${ProfileButton()}
    </header>
    `
  return html
}

export default Navigation