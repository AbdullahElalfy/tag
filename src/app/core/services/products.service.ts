import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProducts } from '../interface/i-products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private jsonUrl = 'assets/products-api/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<{ products: iProducts[] }> {
    return this.http.get<{ products: iProducts[] }>(this.jsonUrl);
  }
}
