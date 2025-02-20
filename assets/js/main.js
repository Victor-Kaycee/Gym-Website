/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('header-bg')
    : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)




gsap.from('.nav__logo', {y: -100, opacity: 0, delay: 0.5, duration: 1})
gsap.from('.nav-home', {y: -100, opacity: 0, delay: 0.6, duration: 1})
gsap.from('.nav-about', {y: -100, opacity: 0, delay: 0.7, duration: 1})
gsap.from('.nav-class', {y: -100, opacity: 0, delay: 0.8, duration: 1})
gsap.from('.nav-time', {y: -100, opacity: 0, delay: 0.9, duration: 1})
gsap.from('.nav-shop', {y: -100, opacity: 0, delay: 1, duration: 1})
gsap.from('.nav-contact', {y: -100, opacity: 0, delay: 1.1, duration: 1})
gsap.from('.home-titles', {y: 100, opacity: 0, delay: 1, duration: 1})
gsap.from('.home-title', {y: 100, opacity: 0, delay: 1.1, duration: 1})
gsap.from('.home-img', {y: -100, opacity: 0, delay: 1.2, duration: 1})
gsap.from('.fbook', {x: -100, opacity: 0, delay: 1.4, duration: 1})
gsap.from('.tweet', {x: -100, opacity: 0, delay: 1.5, duration: 1})
gsap.from('.insta', {x: -100, opacity: 0, delay: 1.6, duration: 1})
gsap.from('.gym', {x: 100, opacity: 0, delay: 1.7, duration: 1})



ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
})

ScrollReveal().reveal(".creators-grid h2, .goal-header h1, .g-3, .g-4, .tedu, .flexibility-grids img, .t-3, .t-4", { origin: 'left'})
ScrollReveal().reveal(".creators-grid-2 p, .goal-header p, .g-1, .g-5, .dsg, .flex-content, .t-1, .t-6", { origin: 'right'})
ScrollReveal().reveal(".creators-grid-2 img, .g-2, .services-header h2, .team-header, .t-5", { origin: 'top'})
ScrollReveal().reveal(".sp-1", { origin: 'top', duration: '2000'})
ScrollReveal().reveal(".sp-2", { origin: 'top', duration: '3000'})
ScrollReveal().reveal(".sp-3", { origin: 'top', duration: '4000'})
ScrollReveal().reveal(".sp-4", { origin: 'top', duration: '5000'})
ScrollReveal().reveal(".sp-5", { origin: 'top', duration: '6000'})
ScrollReveal().reveal(".sp-6", { origin: 'top', duration: '7000'})
ScrollReveal().reveal(".creators-grid img, .dvpm, .t-2", { origin: 'bottom'})
