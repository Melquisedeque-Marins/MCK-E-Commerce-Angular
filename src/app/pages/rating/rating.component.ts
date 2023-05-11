import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  product!: Product;
  currentRating!: number;

  constructor( private productService: ProductService,
               private route: ActivatedRoute) {
    route.params.subscribe( params => {
      if (params['id']) {
        this.productService.getProduct(params['id']).subscribe( 
          {
            next: (res) => {
              this.product = res
              this.currentRating = res.rate
            },
            error: (err) => console.log(err)
        });
      }
    })

   }

  ngOnInit(): void {
  }

}
