import { Injectable } from '@angular/core';
import { iProducts } from '../interface/i-products';
import { ProductService } from './products.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // <<<<< الحل

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private _products: ProductService) {}

  getProductById(id: number): Observable<iProducts | undefined> {
    return this._products
      .getProducts()
      .pipe(
        map((res: any) => res.products.find((p: iProducts) => p.id === id))
      );
  }
}
