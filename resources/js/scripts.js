const navigatorNav = document.querySelector('#navigator-nav')
const navBtn = document.querySelector('#nav-btn')

navBtn.addEventListener('click', () => {
  navigatorNav.classList.toggle('active')
  navBtn.classList.toggle('active')
})