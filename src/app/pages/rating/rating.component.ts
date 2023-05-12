import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  ratingForm!: FormGroup;
  isSubmited!: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router
              ){
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
    this.createRatingForm();
  }

  createRatingForm() {
    this.ratingForm = this.formBuilder.group({
      rate: [''],
      title: ['', [Validators.minLength(10)]],
      review: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isSubmited = true;
    if(this.ratingForm.invalid) return;
    console.log(`/products/${this.product.id}`)
    this.router.navigateByUrl(`/products/${this.product.id}`)
  }

}
