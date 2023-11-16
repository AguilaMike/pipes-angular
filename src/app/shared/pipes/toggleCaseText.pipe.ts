import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCaseText',
  standalone: true,
})
export class ToggleCaseTextPipe implements PipeTransform {
  transform(value: string, action?: 'upper'|'lower'|'toggle'): string {
    switch (action) {
      case 'upper':
        return value.toUpperCase();
      case 'lower':
        return value.toLowerCase();
      case 'toggle':
        return this.toggleCase(value);
      default:
        return value;
    }
  }

  toggleCase(value: string): string {
    return value.split('').map((char: string) => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  }
}
