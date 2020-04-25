import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys2'
})
export class Keys2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Object.keys(value);
    
  }

}
