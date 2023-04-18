import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { Review } from 'src/app/Review';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!:Product;
  promoProductsList: Product[] = [];
  relatedProductsList: Product[] = [];
  pathVariable!:number
  reviews:Review[] = [];

  constructor( private productService: ProductService, 
    private reviewService: ReviewService, 
    private route: ActivatedRoute,
    private router:Router) { 

    route.params.subscribe( params => {
      if (params['id']) {
        this.productService.getProduct(params['id']).subscribe( 
          {
            next: (res) => {
              this.product = res
            },
            error: (err) => console.log(err)
        });
      }
    })
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.productService.getAllRelatedProducts(1).subscribe(
      {
        next: (res) => {
          this.relatedProductsList = res.content;
          
        },
        error: (err) => console.log(err)
    })

    this.productService.getAllPromoProducts(1).subscribe(
      {
        next: (res) => {
          this.promoProductsList = res.content;
        },
        error: (err) => console.log(err)
    })
  }

 

}
