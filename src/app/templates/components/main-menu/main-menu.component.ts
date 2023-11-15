import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'pipes-main-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ['/pipes']
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: ['/pipes/numbers']
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['/pipes/uncommon']
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
          },
        ]
      }
    ];
  }
}
