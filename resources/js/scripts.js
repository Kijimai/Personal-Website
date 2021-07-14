const navigatorNav = document.querySelector('#navigator-nav')
const brandContainer = document.querySelector('#brand-container')
const navBtn = document.querySelector('#nav-btn')
const brandLine1 = document.querySelector('.brand1')
const brandLine2 = document.querySelector('.brand2')
const brandName = document.querySelector('.brand-name')
const navLinks = document.querySelectorAll('.nav-link')
const copyYear = document.querySelector('#year') 
const projectContainers = document.querySelectorAll('.project-container')


//copyright's current year in html
copyYear.textContent = new Date().getFullYear()

navBtn.addEventListener('click', () => {
  navigatorNav.classList.toggle('active')
  navBtn.classList.toggle('active')
})

brandContainer.addEventListener('mouseenter', function() {
  brandLine1.classList.add('active')
  brandLine2.classList.add('active')
  brandName.classList.add('active')
})

brandContainer.addEventListener('mouseleave', function() {
  brandLine1.classList.remove('active')
  brandLine2.classList.remove('active')
  brandName.classList.remove('active')
})

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navBtn.classList.remove('active')
    navigatorNav.classList.remove('active')
  })
})

projectContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    let containerImg = container.querySelector('.project-image')
    let containerCaption = container.querySelector('.project-caption')
    let overlay = container.querySelector('.overlay')
    overlay.classList.add('active')
    containerImg.classList.add('active')
    containerCaption.classList.add('active')
  })
})

projectContainers.forEach(container => {
  container.addEventListener('mouseleave', () => {
    let containerImg = container.querySelector('.project-image')
    let containerCaption = container.querySelector('.project-caption')
    let overlay = container.querySelector('.overlay')
    overlay.classList.remove('active')
    containerImg.classList.remove('active')
    containerCaption.classList.remove('active')
  })
})

