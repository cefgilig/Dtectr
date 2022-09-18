const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); //get all children of UL and store it into a variable - slides

const nextBtn = document.querySelector('#next-button');
const prevBtn = document.querySelector('#prev-button');
const dotNav = document.querySelector('#center-nav')

console.log(nextBtn);
console.log(prevBtn);
console.log(dotNav);

// move slides to left when click left button
// move slides to right when click right button
// move indicator on selected slide
