import { Pipe, PipeTransform } from '@angular/core';
import { iProducts } from '../interface/i-products';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: iProducts[], searchVal: string): iProducts[] {
    console.log(products);
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchVal.toLowerCase())
    );
  }
}
