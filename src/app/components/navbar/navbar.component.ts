import { Component } from '@angular/core';
import { NavLink } from '../../interfaces/nav-link.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showToggle = false;
  navLinks: NavLink[] = [
    {
      id: 1,
      name: 'Inicio',
      path: '/',
    },
    {
      id: 2,
      name: 'Catálogo',
      path: '/catalog',
    },
    {
      id: 3,
      name: 'Ofertas',
      path: '/offers',
    },
  ];

  onToggle() {
    this.showToggle = !this.showToggle;
  }
}
