import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fun'
})
export class FunPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}