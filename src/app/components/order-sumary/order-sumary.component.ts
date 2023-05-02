import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { Cart } from 'src/app/models/Cart';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent implements OnInit {
  address!: boolean;
  cart!: Cart;

  constructor(private cartService: CartService,
              private addressService: AddressService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
    this.addressService.getDeliveryAddressObservable().subscribe((address) => {
      
      this.address = address ? true : false;
    });
   }


  ngOnInit(): void {
  }

}
