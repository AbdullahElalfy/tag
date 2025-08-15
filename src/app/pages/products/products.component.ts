import { Component, NgModule } from '@angular/core';
import { ProductService } from '../../core/services/products.service';
import { iProducts } from '../../core/interface/i-products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, SearchPipe, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: iProducts[] = [];
  inpVal: string = '';
  constructor(
    private _products: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    this._products.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  addToCart(product: iProducts) {
    this._cartService.addToCart(product);
  }
}
