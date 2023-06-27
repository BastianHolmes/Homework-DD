import svg from "../../assets/img/symbol.svg"

const Image = (id, style="") => {
  const html =
  `<svg class="img ${style}">
  <use xlink:href="${svg}#${id}"/>
  </svg>`

  return html
}

export default Image