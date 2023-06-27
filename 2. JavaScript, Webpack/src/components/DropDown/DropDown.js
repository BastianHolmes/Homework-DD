
const DropDown = () => {

  document.addEventListener("DOMContentLoaded", () => {

  const btns = document.querySelectorAll(".dropdown");
  const drops = document.querySelectorAll('.dropdown__item');
  const items = document.querySelectorAll('.item__settings');
  const dropImg = document.querySelector(".drop_down_1");
    
    btns.forEach(el => {
      el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;
        let drop = currentBtn.closest(".dropdown").querySelector('.dropdown__item');
        let item = currentBtn?.closest(".item")?.querySelector('.item__settings');
        
        
        btns.forEach(el => {
          if (el !== currentBtn) {
            el.classList.remove("btn_active");
          }
        });
  
        drops.forEach(el => {
          if (el !== drop) {
            el.classList.remove('dropdown_active');
          }
        });

        items.forEach(el => {
          el.classList.remove('item_active')
        })
        
        drop.classList.toggle("dropdown_active");
        if (item) currentBtn.classList.toggle("btn_active");
        if (item) item.classList.toggle("item_active");

        dropImg.classList.remove("drop_down_1_active")
       
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest(".dropdown")) {
        btns.forEach(el => {
          el.classList.remove("btn_active");
        });
  
        drops.forEach(el => {
          el.classList.remove('dropdown_active');
        });

        dropImg.classList.remove("drop_down_1_active")
      }

    });

    const btn = document.querySelectorAll('.btn');


    btn.forEach(btnEl =>{
    btnEl.addEventListener('click', ()=>{
    document.querySelector('.btn_active')?.classList.remove('btn_active');
    btnEl.classList.add('btn_active');
  })
  })
    document.querySelector(".btn_profile").addEventListener("click", () => {
      dropImg.classList.toggle("drop_down_1_active")
    })
  });
}

export default DropDown

