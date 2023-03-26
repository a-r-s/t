// Home.js
export function Home() {
    // tworzenie sekcji
    const section = document.createElement('section');

    // wstawianie obrazka
    const img = document.createElement('img');
    img.src = require('../assets/support.png');
    img.style.width = '50vw';

    //"doklejenie" sekcji
    section.innerHTML = `
    <h2>Home</h2>
    <p>Witaj w IT SPA</p>
    <p>Każdy programista lubi u nas odpoczywać.</p>
    // PRZYKLAD:
<i class="fa fa-umbrella"></i>
    `;

    section.append(img);

    return section;
}