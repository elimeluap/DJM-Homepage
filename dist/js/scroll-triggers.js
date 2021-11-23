'use strict';

const observer = new IntersectionObserver(
  function (observables) {
    for (const observable of observables) {
      if (observable.isIntersecting) {
        observable.target.classList.add('visible');
      }
    }
  },
  {
    threshold: 0.8,
  }
);

const scrollTriggers = document.querySelectorAll('.scroll-trigger');
for (const scrollTrigger of scrollTriggers) {
  observer.observe(scrollTrigger);
}
