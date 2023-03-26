import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/Treatments'

const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rooms', component: RoomList },
  { name: 'Zabiegi', component: Treatments },
  { name: '🛒', component: Cart }
];

export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  nav.append(...navButtons);

  return nav;
}