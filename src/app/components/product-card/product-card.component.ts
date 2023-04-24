import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product

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
