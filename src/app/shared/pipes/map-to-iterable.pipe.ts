import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {
  transform(obj) {
    if (obj) {
      return Object.keys(obj);
    } else {
      return obj;
    }
  }
}
