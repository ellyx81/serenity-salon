import menuToggler from './components/menuToggler'
import showElements from './components/showElementsOnScroll'
import dropdown from './components/dropdown';
import slider from './components/slider';
import testimonialSlider from './components/testimonialSlider';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    menuToggler();
    showElements();
    dropdown();
    slider();
    testimonialSlider();
  },
  false
)
