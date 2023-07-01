import Button from '@/components/Button/Button'

const Navigation = () => {
  
    const html = `
    <header class="navigation">
      ${Button('Проекты', 'btn-nav projects btn_active')}
      ${Button('Задачи', 'btn-nav tasks')}
    </header>
    `
  return html
}

export default Navigation
