import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/CartItem';
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
    this.cartService.removeToCart(this.cartItem.product.id)
  }

}
