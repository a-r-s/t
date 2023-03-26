import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';

import { Home } from './views/Home';
import { RoomList } from './views/RoomList';
import { Nav } from './navigation/Nav';

const main = document.querySelector('main');

//przyczepiamy nawigację PRZED elementem main
main.before(Nav());

//reagujemy na zdarzenie 'navigate'
document.body.addEventListener('navigate', event =>{
    const Component = event.detail;

    //czyścimy zawartość elementu main, następnie podstawiamy nowy komponent
    main.innerHTML = '';
    main.append(Component());
});

//użytkownik wystartuje na home
main.append( Home() );