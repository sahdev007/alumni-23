import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showContent'
})
export class ShowContentPipe implements PipeTransform {
  public content: any;
  transform(value: any, ...args: unknown[]): unknown {
   
    if(value) {
      this.content = value?.replace(/<\/?[^>]+(>|$)/g, "");
      // console.log(this.content);
    }
    return this.content;
  }

}
