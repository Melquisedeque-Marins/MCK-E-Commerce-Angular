import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { Cart } from '../Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.getCartFromLocalStorage());

  constructor() { }

  addToCart(product:Product): void {
    this.cart.items.push(new CartItem(product));
    this.setCarToLocalStorage();
  }

  removeToCart(itemId:number): void {
    this.cart.items = this.cart.items.filter(p => p.product.id != itemId);
    this.setCarToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCarToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCarToLocalStorage():void {
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
