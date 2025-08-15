import { Injectable } from '@angular/core';
import { iProducts } from '../interface/i-products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    // Load cart from localStorage when service starts
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartSubject.next(this.cartItems);
    }
  }

  private cartItems: iProducts[] = [];
  private cartSubject = new BehaviorSubject<iProducts[]>([]);

  cart$ = this.cartSubject.asObservable();

  private saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(product: iProducts) {
    const item = this.cartItems.find((item) => item.id === product.id);

    if (item) {
      item.quantity = (item.quantity || 1) + 1;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.cartSubject.next(this.cartItems);
    this.saveToLocalStorage();
  }

  getCartItems() {
    return this.cart$;
  }

  removeFromCart(product: iProducts) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.cartSubject.next(this.cartItems);
    this.saveToLocalStorage();
  }

  increaseQuantity(product: iProducts) {
    const item = this.cartItems.find((i) => i.id === product.id);
    if (item) {
      item.quantity! += 1;
      this.cartSubject.next(this.cartItems);
      this.saveToLocalStorage();
    }
  }

  decreaseQuantity(product: iProducts) {
    const item = this.cartItems.find((i) => i.id === product.id);
    if (item) {
      if (item.quantity! > 1) {
        item.quantity! -= 1;
      } else {
        this.cartItems = this.cartItems.filter((p) => p.id !== product.id);
      }
      this.cartSubject.next(this.cartItems);
      this.saveToLocalStorage();
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
    localStorage.removeItem('cartItems');
  }
}
