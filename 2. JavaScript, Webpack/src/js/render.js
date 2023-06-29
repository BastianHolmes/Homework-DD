import Page from "@/components/Empty-page/Empty-page";
import Search from "@/components/Search/Search";
import Navigation from "@/components/Navigation/Navigation";
import DropDown from "../components/DropDown/DropDown";



const app = document.createElement('div');

app.innerHTML = `
  ${Navigation()}
  ${Search()}
  ${Page()}
`
DropDown()

document.querySelector(".app").appendChild(app)

