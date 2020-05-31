var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  itemSelector: '.grid-item',
});

ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.grid-item', { delay: 500 });
ScrollReveal().reveal('.punchline', { delay: 2000 });
