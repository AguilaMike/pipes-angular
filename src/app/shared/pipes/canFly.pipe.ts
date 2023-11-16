import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean, textTrust: string= 'Vuela', textWrong: string = 'No vuela'): string {
    return value ? textTrust : textWrong;
  }

}
