/**
 * Toggle menu in mobile view
 */
const menuToggler = () => {
  const headers = document.querySelectorAll('.header');
  const body = document.body;
  const windowWidth = window.innerWidth;

  if (windowWidth < 1025 && headers) {
    headers.forEach((header) => {
      const toggler = header.querySelector('.js-toggler');
      const anchors = header.querySelectorAll('.header__anchor');
      const nav = header.querySelector('.js-nav') as HTMLElement;
      const updateBodyOverflow = () => {
        if (header && header.classList.contains('expand')) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'auto';
        }
      };

      const collapseHeader = () => {
        header.classList.remove('expand');
        updateBodyOverflow();
      };

      toggler?.addEventListener('click', () => {
        header?.classList.toggle('expand');
        updateBodyOverflow();

        anchors.forEach((anchor) => {
          anchor.addEventListener('click', collapseHeader);
        });
      });
    });
  }
}

export default menuToggler