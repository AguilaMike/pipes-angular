import { Component } from '@angular/core';
import { I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { ContainerPageComponent } from '../../components/container-page/container-page.component';
import { Observable, interval, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [ContainerPageComponent, ButtonModule, FieldsetModule, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'John';
  public gender: 'male'|'female' = 'male';
  public invitationMap = { male: 'invitarlo', female: 'invitarla' };

  changeClient(): void {
    if (this.name === 'John') {
      this.name = 'Jane';
      this.gender = 'female';
    } else {
      this.name = 'John';
      this.gender = 'male';
    }
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Julian', 'Melisa', 'Miguel', 'Fernanda'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  };

  deleteClient(): void {
    if (this.clients.length > 0) this.clients.pop();
    else this.clients = ['Maria', 'Pedro', 'Fernando', 'Julian', 'Melisa', 'Miguel', 'Fernanda'];
  }

  // Slice
  public textSlice: string = '1234567890';

  // Json
  public objectJson: object = { name: 'John', age: 30, city: 'New York' };

  // KeyValue
  public objectKey: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  public map = new Map([[2, 'foo'], [1, 'bar']]);

  // Async
  public myObservableTimer: Observable<number> = interval(1000).pipe(tap(value => console.log('tap:', value)));
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise complete!');
      console.log('Promise complete!');
    }, 4000);
  });
}
