/**
 * Show and hide elements submenu
 */
const dropdown = () => {
  
  const sub = document.querySelector(".js-dropdown");
  
  if (sub && screen.width >= 1024) {
    
    sub?.addEventListener('mouseover', () => {
      sub?.classList.add('show');
    })

    sub?.addEventListener('mouseout', () => {
      sub?.classList.remove('show');
    })
  }
}

export default dropdown