
const DropDown = () => {

  document.addEventListener("DOMContentLoaded", () => {

  const btns = document.querySelectorAll(".dropdown_btn");
  const drops = document.querySelectorAll('.dropdown__item');
  const dropImg = document.querySelector(".drop_down_1");
    

    
    btns.forEach(el => {
      el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;
        let drop = currentBtn.closest(".dropdown").querySelector('.dropdown__item');

        btns.forEach(el => {
          if (el !== currentBtn) {
            el.classList.remove("btn_active");
            el.classList.remove('item_active');
          }
        });

        currentBtn.classList.toggle("btn_active");
        currentBtn.classList.toggle("item_active");
        

        drops.forEach(el => {
          if (el !== drop) {
            el.classList.remove('dropdown_active');
          }
        });

        drop.classList.toggle("dropdown_active");

       
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest(".dropdown")) {
        btns.forEach(el => {
          el.classList.remove("btn_active");
          el.classList.remove("item_active");
        });
        
        dropImg.classList.remove("drop_down_1_active");

        drops.forEach(el => {
          el.classList.remove('dropdown_active');
          
        });
      }
    });

    const btnDisabled = document.querySelectorAll('.btn');

    const handleClick = (event) => {
      const btnPrev = document.querySelector('.btn_active')
      if (btnPrev) {
        btnPrev.classList.remove('btn_active');
        btnPrev.removeAttribute("disabled");
      }  
      
      console.log(btnPrev)

      const curBtn = event.target;
      curBtn.setAttribute('disabled', true);
      curBtn.classList.add('btn_active');
    }

    btnDisabled.forEach(btnEl =>{
      btnEl.addEventListener('click', handleClick)
      
  })
    document.querySelector(".btn_profile").addEventListener("click", () => {
      dropImg.classList.toggle("drop_down_1_active");
      
      btns.forEach(el => {
        el.classList.remove("item_active");
      });
    })
    
  });
}

export default DropDown

