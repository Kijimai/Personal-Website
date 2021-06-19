const navigatorNav = document.querySelector('#navigator-nav')
const brandContainer = document.querySelector('#brand-container')
const navBtn = document.querySelector('#nav-btn')
const brandLine1 = document.querySelector('.brand1')
const brandLine2 = document.querySelector('.brand2')
const brandName = document.querySelector('.brand-name')

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