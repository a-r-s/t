// RoomList.js

// import { RoomDetails } from './RoomDetails';
import { NavButton } from '../common/NavButton';
// import { cartManager } from '../cart/cart-manager';

export function Treatments() {

  const section = document.createElement('section');
  const ul = document.createElement('ul');
  
  section.innerHTML = `
    <h2>Room List</h2>
    <p>Sprawdź ofertę pokoi.</p>
    <p class="loading">Ładuję listę pokoi...</p>
  `;

//   pobieramy liste pokoi z serwera
  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
        const lis = treatments.map(treatments => {
          const li = document.createElement('li');

          li.innerHTML = `
            <h4>${treatments.name}</h4>
            <p>
              <strong>Czas trwania: ${treatments.time} minut</strong>
            </p>
            <p>
              <strong>${treatments.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

          const addToCartButton = document.createElement('button');
          addToCartButton.innerText = 'Add to cart';
          addToCartButton.classList.add('btn');
          addToCartButton.addEventListener('click', () => cartManager.addItem(treatments));

          const detailsButton = NavButton('Read more...', () => RoomDetails(treatments.id), ['btn']);
          
          li.querySelector('footer').append(addToCartButton, detailsButton);

          return li;
        });

        ul.append(...lis);

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(ul);
    });

  return section;
}
