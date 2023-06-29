import ProjectItem from "@/components/Project-item/Project-item";
import TaskItem from "@/components/Task-item/Task-item";
import Button from "@/components/Button/Button";

const Page = () => {

  let projectExist = true

  const html = `
  <section class="content-field">
      ${
      projectExist ?
      ` 
      <div class="content-field__bar">
      ${ProjectItem("Б.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка есл...")}
      ${ProjectItem("Название", "111111111111111111111111111111111111111111111111111111111111111")}
      ${ProjectItem()}
      ${ProjectItem()}
      ${ProjectItem()}
      ${ProjectItem()}
      ${TaskItem("Б.Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название проекта, создано специально чтоб проверить не сломается ли верстка есл...")}
      </div>
      ` :
      `<div class="content-field__bar content-field__bar_no-list">
      <span class="content-field__description">
        Не создан ни один проект </span>
        ${Button("Добавить")}
        </div>`}
    </section>
  `

  return html
}

export default Page