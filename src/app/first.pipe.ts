import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'first',
})
export class FirstPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return value.substr(0, 10);
  }
}
