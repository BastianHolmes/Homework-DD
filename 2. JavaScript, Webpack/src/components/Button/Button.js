import Image from "../Image/Image";
import img from "../../assets/img/profile_pic.jpg"
import DropDown from '@/components/DropDown/DropDown'

const Button = (text="", type="", isProfile = false) => {

  const html = isProfile ? `
  <button class="btn ${type} dropdown" >
  <img class="profile-pic" src="${img}" alt="profile picture" onclick=${DropDown()}/>
  ${Image('icon-drop_down_1',"drop_down_1")}
  ${text}
  <ul class="dropdown__item dropdown__item_nav">
    <li class="dropdown__li">Профиль</li>
    <li class="dropdown__li">Выход</li>
  </ul>
  </button>`
    :
  `<button class="btn ${type}">${text}</button>`;

  return html
}


export default Button