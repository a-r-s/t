// RoomDetailis.js
export function RoomDetails(roomId) {
    // tworzenie sekcji
    const section = document.createElement('section');

    //"doklejenie" sekcji
    section.innerHTML = `
    <h2>Room</h2>
    <p class="loading">Ładuję listę pokoi...</p>
    `;

    fetch(`http://localhost:3000/rooms/${roomId}`)
        .then(response => response.json())
        .then(room => {
            const details = document.createElement('article');

            details.innerHTML = `
                <h3>${room.name}</h3>
                <p>Liczba łóżek: ${room.beds}</p>
                <p>Liczba gości: ${room.guests}</p>
                <p>${room.description}</p>
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
                <p></p>
            `;

            // złap element o takiej klasie, a następnie usuń go i zamiast niego pokaż info, które pobrałeś z serwera
            section.querySelector('.loading').remove();
            section.append(details);

        });


    return section;
}