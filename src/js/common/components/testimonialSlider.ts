/**
 * Setup splide plugin for banner
 */

declare var Splide: any

const testimonialSlider = () => {

    const card = document.querySelector(".testimonial__slider");
        
    var cardSplide = new Splide( card, {
        type: 'loop',
        focus: 'center',
        arrows: false,
        pagination: false,
        drag: true,
        perPage: 3,
    });
    cardSplide.mount();
}
  
export default testimonialSlider