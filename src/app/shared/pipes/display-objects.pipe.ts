import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'displayObj'})
export class PipeDisplayObjects implements PipeTransform {
  transform(value): any {
    const objToArray = [];
    for (const key in value) {
      objToArray.push({key: key, value: value[key]});
    }
    return objToArray;
  }
}
