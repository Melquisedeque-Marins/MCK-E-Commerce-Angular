import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  productDetail!:Product;
  promoProductsList: Product[] = [];
  relatedProductsList: Product[] = [];
  pathVariable!:number
  reviews:Review[] = [];
  

  constructor( private productService: ProductService, private reviewService: ReviewService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      res => this.pathVariable = res['id']
    )
  }

  ngOnInit(): void {
    this.productService.getProduct(this.pathVariable).subscribe( 
      {
        next: (res) => {
          this.productDetail = res
        },
        error: (err) => console.log(err)
    });
    this.reviewService.getReviewsByProduct(this.pathVariable).subscribe(
      {
        next: (res) => {
          this.reviews = res
        },
        error: (err) => console.log(err)
      }
    )
      
    this.productService.getAllRelatedProducts(1).subscribe(
      {
        next: (res) => {
          this.relatedProductsList = res.content;
          console.log(this.productDetail.categories[0].id);
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

  getReviews() {
    
  }

}