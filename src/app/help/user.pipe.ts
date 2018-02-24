import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: string, before: string, after: string): string {
    let newStr = `${before} ${value} ${after}`;
    return newStr;
  }

}