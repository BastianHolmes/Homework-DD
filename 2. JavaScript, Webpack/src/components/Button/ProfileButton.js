import Image from "@/components/Image/Image";
import img from "@/assets/img/profile_pic.jpg"

const ProfileButton = () => {

  const html =  `
  <div class="dropdown nav-btn">
  <button class="btn_profile dropdown_btn" >
  <img class="profile-pic" src="${img}" alt="profile picture"/>
  ${Image('icon-drop_down_1',"drop_down_1")}
  </button>
  <ul class="dropdown__item">
    <li class="dropdown__li">Профиль</li>
    <li class="dropdown__li">Выход</li>
  </ul>
  </div>`

  return html
}

export default ProfileButton