import { Component } from '@angular/core';
import { DecimalPipe, CurrencyPipe, PercentPipe } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ContainerPageComponent } from '../../components/container-page/container-page.component';

@Component({
  standalone: true,
  imports: [ContainerPageComponent, CardModule, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss'
})
export class NumbersPageComponent {
  public totalSells: number = 2567789.568;
  public percentage: number = 0.25678;
}
