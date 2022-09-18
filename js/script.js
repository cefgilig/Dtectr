const buttons = document.querySelectorAll("[data-carousel-button]");

// loop through each button
buttons.forEach(button => {
    // add event listener when button is click it will go to next or previous image
    button.addEventListener("click", () => {
        // access the data of each button
        // if equal to next then return the value true, else previous button
        const offset = button.dataset.carouselButton === "next" ? 1  : -1;
        // fetch all slides
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slide-Image.querySelector("[data-active]");
        let slidesIndex = [...slide-image.children].indexOf(activeSlide) + offset;

        if (slidesIndex < 0) slidesIndex = slide-image.children.length = 1;
        if (slidesIndex >= slides-image.children.length) slidesIndex =0;

        slides.children[slidesIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})