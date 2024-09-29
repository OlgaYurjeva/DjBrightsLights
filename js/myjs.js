const audioTracks = document.querySelectorAll('.tracks__item');
const audioControl = document.querySelector('.tracks__controls');
const imageTrack = document.querySelector('.tracks__img img');
const imgTop = document.querySelector('.about__img--top');
const imgBottom = document.querySelector('.about__img--bottom');
const openClose = document.querySelector('.close-open');
const menu = document.querySelector('.header__list');
const menuItems = menu.querySelectorAll('.header__item');

openClose.addEventListener('click', function () {
   menu.classList.toggle('header__list--open');
   if (menu.classList.contains('header__list--open')) {
      openClose.querySelector('.line').classList.add('line--cross');
   } else {
      openClose.querySelector('.line').classList.remove('line--cross');
   }
})

imgTop.addEventListener('click', function () {
   this.style.zIndex = '3';
   this.style.opacity = '1';
   imgBottom.style.zIndex = '2';
   imgBottom.style.opacity = '0.5';
})
imgBottom.addEventListener('click', function () {
   this.style.zIndex = '3';
   this.style.opacity = '1';
   imgTop.style.zIndex = '2';
   imgTop.style.opacity = '0.5';
})

for (let i = 0; i <= audioTracks.length; i++) {
   audioTracks[i].addEventListener('click', function (e) {
      const audioAttr = audioTracks[i].firstChild.getAttribute('src');
      const imgAttr = imageTrack.setAttribute('src', '');
      imageTrack.setAttribute('src', `images/track${i}.jpg`);
      audioControl.setAttribute('src', '');
      audioControl.setAttribute('src', `${audioAttr}`);
      document.querySelector('video').pause();

      for (let i = 0; i <= audioTracks.length; i++) {
         e.target.classList.add('tracks__item--active');
         audioTracks[i].classList.remove('tracks__item--active');

      }

   })

}

