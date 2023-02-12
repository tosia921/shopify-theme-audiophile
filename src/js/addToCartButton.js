class addToCartButton extends HTMLElement {
  constructor() {
    super();

    const minus = this.querySelector('.minus');
    const plus = this.querySelector('.plus');

    const button = this.querySelector('.js-add-to-cart');
    const price = this.querySelector('.price');

    minus.addEventListener('click', this.decreaseQuanity);
    plus.addEventListener('click', this.increaseQuanity);
    button.addEventListener('click', this.addToCart);

    console.log(minus);
  }

  addToCart() {
    const form = document.querySelector('.product-form');
    const itemID = form.getAttribute('data-id');

    const quanity = document.querySelector('.quanity').value;

    let formData = {
      items: [
        {
          id: +itemID,
          quantity: +quanity,
        },
      ],
    };

    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  increaseQuanity() {
    const quanity = document.querySelector('.quanity');

    if (+quanity.value < 100) {
      quanity.value = +quanity.value + 1;
    }
  }
  decreaseQuanity() {
    const quanity = document.querySelector('.quanity');

    if (+quanity.value > 0) {
      quanity.value = +quanity.value - 1;
    }
  }
}

customElements.define('add-to-cart-button', addToCartButton);
