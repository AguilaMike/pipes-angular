import { Component } from '@angular/core';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ContainerPageComponent } from '../../components/container-page/container-page.component';

@Component({
  standalone: true,
  imports: [ContainerPageComponent, CardModule, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss'
})
export class BasicPageComponent {
  public variableToPipe: string = 'ThIs Is A vArIaBlE tO pIpE'
  public customDate: Date = new Date();
}
