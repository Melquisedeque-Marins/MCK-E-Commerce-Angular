import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/Address';
import { Order } from 'src/app/models/Order';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: Order = new Order();
  checkoutForm!: FormGroup;
  deliveryData!: Address;

  constructor(cartService: CartService,
              private addressService: AddressService,
              private formBuilder: FormBuilder,
              ) {
                const cart = cartService.getCart();
                this.order.items = cart.items;
                this.order.totalPrice = cart.totalPrice;
                this.addressService.getDeliveryAddressObservable().subscribe((address) => {
                  this.deliveryData = address;
                })

               }

  ngOnInit(): void {
    
  }

}
