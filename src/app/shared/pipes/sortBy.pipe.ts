import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  standalone: true,

})
export class SortByPipe<T> implements PipeTransform {

  transform(list: T[], sortBy: keyof T | null, type: 'asc' | 'desc' = 'asc'): T[] {
    if (!sortBy) {
      return list;
    }
    return list.sort((a: T, b: T) => {
      if (type === 'desc') {
        const temp = a;
        a = b;
        b = temp;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      } else if (a[sortBy] < b[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
