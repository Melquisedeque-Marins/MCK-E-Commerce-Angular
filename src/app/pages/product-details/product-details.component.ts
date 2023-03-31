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
  product!:Product;
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
          this.product = res
        },
        error: (err) => console.log(err)
    });
  }

  getReviews() {
    this.reviewService.getReviewsByProduct(1).subscribe(
      {
        next: (res) => {this.reviews = res
          console.log(this.reviews)
        },
        error: (err) => console.log('review error')
      }
    )
  }

}
