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

ScrollReveal().reveal(".home-mck-1, .g-3, .g-4, .p-3", { origin: 'left'})
ScrollReveal().reveal(".home-mck-2, .about-header p, .goal-header p, .g-1, .g-5, .elevate-header p, .p-1", { origin: 'right'})
ScrollReveal().reveal(".home-mck-2, .about-header h1, .goal-header h1, .elevate-header h1, .class-header h1, .pricing-header h1, .video-header h1, .trainers-header h1, .contact-header h1", { origin: 'top'})
ScrollReveal().reveal(".about-img, .g-2, .elevate-img, .p-2, .video-link, .contact-link", { origin: 'bottom'})
ScrollReveal().reveal(".home-head h2", { origin: 'top', delay: 400, distance: '50px'})
ScrollReveal().reveal(".home-head h1, .class-grids, .trainers-grids", { scale: 1.1, delay: 500})
ScrollReveal().reveal(".sp-1", { origin: 'top'})
ScrollReveal().reveal(".sp-2", { origin: 'top', delay: 300})
ScrollReveal().reveal(".sp-3", { origin: 'top', delay: 400})
ScrollReveal().reveal(".sp-4", { origin: 'top', delay: 500})
ScrollReveal().reveal(".sp-5", { origin: 'top', delay: 600})
ScrollReveal().reveal(".sp-6", { origin: 'top', delay: 700})


