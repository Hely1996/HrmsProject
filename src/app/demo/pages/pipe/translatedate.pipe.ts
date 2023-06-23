import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({
  name: 'translatedate'
})
export class TranslatedatePipe implements PipeTransform {

  transform(date: Date | Moment): unknown {
    return null;

    // return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

}
