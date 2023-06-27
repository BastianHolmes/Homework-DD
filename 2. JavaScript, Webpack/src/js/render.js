import Page from "../components/Empty-page/Empty-page";
import Search from "../components/Search/Search";
import Navigation from "../components/Navigation/Navigation";



const app = document.createElement('div');

app.innerHTML = `
  ${Navigation()}
  ${Search()}
  ${Page()}
`

document.querySelector(".app").appendChild(app)

