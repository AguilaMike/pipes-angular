import { Component } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ContainerPageComponent } from '../../components/container-page/container-page.component';
import { pipes } from '../../../shared/pipes';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  standalone: true,
  imports: [ContainerPageComponent, FieldsetModule, ButtonModule, PanelModule, TableModule, ...pipes],
  templateUrl: './other-page.component.html',
  styleUrl: './other-page.component.scss'
})
export class OtherPageComponent {
  public toggleText: string = 'toggle CASE';
  public stateToggle?: 'upper'|'lower'|'toggle';
  public sortBy: keyof Hero | null = null;
  public sortByType: 'asc' | 'desc' = 'asc';
  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Robin', canFly: false, color: Color.green },
    { name: 'Flash', canFly: false, color: Color.red },
    { name: 'Ironman', canFly: true, color: Color.red },
    { name: 'Thor', canFly: true, color: Color.blue },
    { name: 'Hulk', canFly: false, color: Color.green },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Wolverine', canFly: false, color: Color.yellow },
  ];

  get stateToggleSubtitle(): string {
    return `El estado actual del pipe es: ${!this.stateToggle ? 'ninguno' : this.stateToggle}`;
  }

  onChangeStateToggle(): void {
    switch (this.stateToggle) {
      case 'upper':
        this.stateToggle = 'lower';
        break;
      case 'lower':
        this.stateToggle = 'toggle';
        break;
      case 'toggle':
        this.stateToggle = 'upper';
        break;
      default:
        this.stateToggle = 'upper';
        break;
    }
  }

  onToggleSort(field: keyof Hero): void {
    if (this.sortBy === field) {
      this.sortByType = this.sortByType === 'asc' ? 'desc' : 'asc';
      // if (this.sortByType === 'asc') {
      //   this.sortBy = null;
      // }
    } else {
      this.sortBy = field;
      this.sortByType = 'asc';
    }
  }
}
