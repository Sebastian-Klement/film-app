import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToNumber',
})
export class ConvertToNumberPipe implements PipeTransform {
  transform(value: string): number {
    var str = String(value.match(/(\d+)/));
    return parseInt(str, 10);
  }
}
