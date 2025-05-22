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


//  swiper

const swiper = new Swiper('.class-wrapper', {
  loop: true,
  autoplay: true,
  grabCursor :true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 4
    },
    
  }
});


// swiper-2

const swiper2 = new Swiper('.trainers-wrapper', {
  loop: true,
  autoplay: true,
  grabCursor :true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

  breakpoints: {
    0: {
        slidesPerView: 1
    },
    620: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 4
    },
    
  }
});




gsap.from('.nav__logo', {y: -100, opacity: 0, delay: 0.5, duration: 1})


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
