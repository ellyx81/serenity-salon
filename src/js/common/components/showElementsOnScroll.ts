/**
 * Show and hide elements (header and to-top-btn) while scrolling
 */
const showElements = () => {
  
  const header = document.querySelector(".header");
  //const btn = document.querySelector(".js-to-top");
  
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 400) {
        header.classList.add("show");
      //  btn.classList.add("show");
      }
      else {
        header.classList.remove("show");
      //  btn.classList.remove("show");
      }
    }
  });
}

export default showElements