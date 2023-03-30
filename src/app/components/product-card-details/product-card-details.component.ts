import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-card-details',
  templateUrl: './product-card-details.component.html',
  styleUrls: ['./product-card-details.component.css']
})
export class ProductCardDetailsComponent implements OnInit {
  @Input() product!:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
