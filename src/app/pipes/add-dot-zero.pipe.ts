import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addDotZero'
})
export class AddDotZeroPipe implements PipeTransform {

  transform(value: number): string {
    return value + '.0';
  }

}
