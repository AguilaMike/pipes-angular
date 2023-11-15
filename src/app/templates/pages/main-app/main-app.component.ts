import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainMenuComponent } from '../../components/main-menu/main-menu.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.scss'
})
export class MainAppComponent {}
