import { Component, NgModule, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { iProducts } from '../../core/interface/i-products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: iProducts[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  increaseQuantity(item: iProducts) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: iProducts) {
    this.cartService.decreaseQuantity(item);
  }
}
