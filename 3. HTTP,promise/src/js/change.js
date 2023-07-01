
document.addEventListener("DOMContentLoaded", () => {

  const btn = document.querySelectorAll('.btn-nav');

  btn.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
      document.querySelector('.btn_active')?.classList.remove('btn_active');
      btnEl.classList.add('btn_active');
    })
  })
})