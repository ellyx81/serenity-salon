/**
 * Setup splide plugin for banner
 */

declare var Splide: any

const slider = () => {
	const img = document.querySelector(".banner__slider");
	
	var imgSplide = new Splide( img, {
		type: 'loop',
		focus: 'center',
		drag: true,
		arrows: false,
		autoplay: true,
		interval: 3000
	});
	imgSplide.mount();
}
  
export default slider
