import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /* transform(value: any, args?: any): any {
    return null;
  } */

  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return [];
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(terms); // only filter country name
    });
  }

}
