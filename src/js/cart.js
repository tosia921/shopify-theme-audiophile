import axios from 'axios';
import formatMoney from './formatMoney';

class Cart extends HTMLElement {
  constructor() {
    super();

    // console.log('running');

    const removeButtons = this.querySelectorAll('.remove');

    // console.log(removeButtons);

    removeButtons.forEach((button) => {
      button.addEventListener('click', this.removeItem);
    });

    this.querySelectorAll('.quanity').forEach((button) => {
      button.addEventListener('click', () => {
        console.log('clicked');
        this.updateQuanity(button);
      });
    });
  }

  removeItem() {
    const item = this.closest('.item');
    const key = item.getAttribute('data-itemid');
    axios
      .post('cart/change.js', {
        id: key,
        quantity: 0,
      })
      .then((res) => {
        if (res.data.items.length === 0) {
          document.querySelector('.cart-content').remove();

          const html = document.createElement('div');
          html.innerHTML = `<div class="cart__empty"><h3>Your Cart is empty</h3></div>`;

          document.querySelector('.cart').appendChild(html);
        } else {
          const format = document
            .querySelector('[data-money-format]')
            .getAttribute(['data-money-format']);
          const totalPrice = formatMoney(res.data.total_price, format);

          document.querySelector('.total_price').textContent = totalPrice;

          item.remove();
        }
      });
  }

  updateQuanity(button) {
    const parent = button.closest('.item__quanity-selector');
    const input = parent.querySelector('.item_count_input');
    // console.log(input);
    const value = Number(input.value);
    const isPlus = button.classList.contains('plus');
    const key = button.closest('.item').getAttribute('data-itemid');
    console.log(key);

    function changeItemQuanity(key, quantity) {
      axios
        .post('/cart/change.js', {
          id: key,
          quantity,
        })
        .then((res) => {
          const format = document
            .querySelector('[data-money-format]')
            .getAttribute(['data-money-format']);
          const totalPrice = formatMoney(res.data.total_price, format);
          const item = res.data.items.find((item) => item.key === key);
          const itemPrice = formatMoney(item.final_line_price, format);
          console.log(itemPrice);
          document.querySelector('.total_price').textContent = totalPrice;
          document.querySelector(
            `[data-itemid="${key}"] .item_price`
          ).textContent = itemPrice;
        });
    }

    if (isPlus) {
      const newValue = value + 1;
      input.value = newValue;
      changeItemQuanity(key, newValue);
    } else if (value > 1) {
      const newValue = value - 1;
      input.value = newValue;
      changeItemQuanity(key, newValue);
    }
  }
}

customElements.define('cart-page', Cart);