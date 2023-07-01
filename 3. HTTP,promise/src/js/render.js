import Page from "@/components/Empty-page/Empty-page";
import Navigation from "@/components/Navigation/Navigation";



const app = document.createElement('div');

app.innerHTML = `
  ${Navigation()}
  ${Page()}
`

document.querySelector(".app").appendChild(app)

