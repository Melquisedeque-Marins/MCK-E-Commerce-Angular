import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-order-sumary',
  templateUrl: './checkout-order-sumary.component.html',
  styleUrls: ['./checkout-order-sumary.component.css']
})
export class CheckoutOrderSumaryComponent implements OnInit {
  
  @Output() pedido = new EventEmitter();
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }
  ngOnInit(): void {
  }

  
  openModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
}
