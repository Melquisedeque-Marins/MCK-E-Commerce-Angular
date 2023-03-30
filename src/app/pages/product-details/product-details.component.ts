import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  pathVariable!:number

  constructor( private productService: ProductService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      res => this.pathVariable = res['id']
    )
  }

  ngOnInit(): void {
    this.productService.getProduct(this.pathVariable).subscribe( 
      {
        next: (res) => {
          this.product = res
        },
        error: (err) => console.log('error')
    });
  }

}
