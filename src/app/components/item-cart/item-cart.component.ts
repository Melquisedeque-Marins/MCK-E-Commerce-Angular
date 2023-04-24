import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
  @Input() cartItem!: CartItem;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  removeItemFromCart() {
    this.cartService.removeFromCart(this.cartItem.product.id)
  }

  plusOneItem(productId:number) {
    this.cartService.plusOneItem(productId);
  }

  minusOneItem(productId:number) {
    this.cartService.minusOneItem(productId);
  }

}
