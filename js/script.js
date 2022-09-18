const nextBtn = document.querySelector('#next-button');
const prevBtn = document.querySelector('#prev-button');
const track = document.querySelector('#carouselTrack');
const dotNav = document.querySelector('#center-nav');

const slides = Array.from(track.children); // get all children of UL and store it into a variable - slides
const dots = Array.from(dotNav.children); // get all children

const slideWidth = slides[0].getBoundingClientRect(); // selecting the slide from first[0] then add function to get it's detail


// arrange the slide to one another
// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + 'rem''

console.log(slideWidth);
// console.log(track);
// console.log(nextBtn);
// console.log(prevBtn);
// console.log(dotNav);

// console.log(slides);
// console.log(dots);

// move slides to left when click left button
// move slides to right when click right button
// move indicator on selected slide
