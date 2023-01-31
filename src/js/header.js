class header extends HTMLElement {
  constructor() {
    super();

    const hamburgerButton = this.querySelector('.hamburger-button');

    console.log(hamburgerButton);

    hamburgerButton.addEventListener('click', this.toogleMenu);
  }

  toogleMenu() {
    console.log('click');
    const headerMenu = document.querySelector('.header-menu');
    console.log(headerMenu);
    headerMenu.classList.toggle('menu-active');
  }
}

customElements.define('header-component', header);
