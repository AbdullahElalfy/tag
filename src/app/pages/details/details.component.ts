import { ProductDetailsService } from './../../core/services/product-details.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iProducts } from '../../core/interface/i-products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  constructor(
    private _activeRoute: ActivatedRoute,
    private _ProductDetailsService: ProductDetailsService,
    private _cartService: CartService
  ) {}

  id: number = 0;
  productDetails!: any;

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.displayProductDetails();
  }

  displayProductDetails(): void {
    console.log(this.id);
    this._ProductDetailsService
      .getProductById(this.id)
      .subscribe((next) => (this.productDetails = next));
  }
  addToCart(product: iProducts) {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: 'Your product was successfully added.',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: '#1a1a1a',
      color: '#f5f5f5',
      confirmButtonColor: '#4bbb0bff',
    });

    this._cartService.addToCart(product);
  }
}
