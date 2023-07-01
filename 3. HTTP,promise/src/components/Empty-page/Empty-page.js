import Button from "@/components/Button/Button"
const Page = () => {

  const html = `
  <section class="content-field"> 
      <div class="content-table">
      <div class="elem">${Button('Добавить с XML','xhr-post')}</div>
      <div class="elem">${Button('Добавить с Fetch','fetch-post')}</div>
      <div class="elem">${Button('Добавить с Axios', 'axios-post')}</div>
      <div class="elem">${Button('Получить с XML', 'xhr-get')}</div>
      <div class="elem">${Button('Получить с Fetch','fetch-get')}</div>
      <div class="elem">${Button('Получить с Axios', 'axios-get')}</div>
      <div class="elem">${Button('Редактировать с XML','xhr-put')}</div>
      <div class="elem">${Button('Редактировать с Fetch','fetch-put')}</div>
      <div class="elem">${Button('Редактировать с Axios', 'axios-put')}</div>
      <div class="elem">${Button('Удалить с XML', 'xhr-delete')}</div>
      <div class="elem">${Button('Удалить с Fetch','fetch-delete')}</div>
      <div class="elem">${Button('Удалить с Axios', 'axios-delete')}</div>
      </div>
    </section>
  `

  return html
}

export default Page