import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscore'
})
export class ReplaceUnderscorePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // console.log(value);
    if(value) {
      const runderScore = value.split('_').join(" ");
      return runderScore;
    }
    return null;
  }

}
