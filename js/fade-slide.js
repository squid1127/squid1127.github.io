// Fade and slide in each element with a staggered effect
// Add the class 'fade-slide-in' to elements you want to animate
// This script will add the 'in' class to each, one after another

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-slide-in');
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('in');
    }, i * 180); // 180ms stagger
  });
});
