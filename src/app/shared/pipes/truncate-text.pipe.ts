import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string | null | undefined, maxLength: number = 20, ellipsis: boolean = true): string {
    if (!value) return '';
    if (value.length <= maxLength) return value;

    return ellipsis ? value.substring(0, maxLength) + '...' : value.substring(0, maxLength);
  
  }

}

