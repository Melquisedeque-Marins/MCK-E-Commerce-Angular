import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card-details',
  templateUrl: './product-card-details.component.html',
  styleUrls: ['./product-card-details.component.css']
})
export class ProductCardDetailsComponent implements OnInit {
  @Input() product!:Product | any;
  @Input() currentRating!: number;


  constructor( private cartService:CartService,
    private router:Router
      ) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.product)
    this.router.navigateByUrl('/cart')
  }

}
