import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-checkout-sumary',
  templateUrl: './checkout-sumary.component.html',
  styleUrls: ['./checkout-sumary.component.css']
})
export class CheckoutSumaryComponent implements OnInit {
  @Input() order!: Order;
  constructor() {
  }

  ngOnInit(): void {
  }
}
