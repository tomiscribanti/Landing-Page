const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('toggle-menu'),
  closeMenu = document.getElementById('close-menu'),
  blurMenu = document.querySelector('.blur__overlay');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  blurMenu.classList.toggle('show');
})
navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
  blurMenu.classList.remove('show');
})

$('.responsive').slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
window.sr = ScrollReveal();
sr.reveal('.container__text__header', {
  duration: 3000,
  origin: 'top',
  distance: '-100px',
  mobile: true
});

window.sr = ScrollReveal();
sr.reveal('.about__container', {
  duration: 3000,
  origin: 'top',
  distance: '-100px',
  mobile: true
});

window.sr = ScrollReveal();
sr.reveal('.features__container', {
  duration: 4000,
  origin: 'top',
  distance: '-100px',
  mobile: true,
});
window.sr = ScrollReveal();
sr.reveal('.status__container', {
  duration: 4000,
  origin: 'top',
  distance: '-100px',
  mobile: true
});
window.sr = ScrollReveal();
sr.reveal('.review__container', {
  duration: 5000,
  origin: 'top',
  distance: '-100px',
  mobile: true
});
window.sr = ScrollReveal();
sr.reveal('.download', {
  duration: 3000,
  origin: 'bottom',
  distance: '150%',
  mobile: true
});