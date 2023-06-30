import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input() currentRating!: number;
  productList: Product[] = [];
  category!: Category;
  highestPrice: number = 0;
  brandList: string[] = [];

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute:ActivatedRoute,
    ) {
     
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.highestPrice = 0;
      this.brandList = [];
      if (params['id']) {
        this.productService.getAllProductsPerCategory(params['id']).subscribe( 
          {
            next: (res) => {
              this.productList = res.content
              this.productList.map(p => {
                this.brandList.push(p.brand)
                if (p.price >= this.highestPrice) {
                  this.highestPrice = p.price
                }
              })
              if (this.highestPrice/1000 < 1)
                this.highestPrice = (this.highestPrice%10) * 10
                else 
                this.highestPrice = Math.round(this.highestPrice/1000) * 2000
            },
            error: (err) => console.log(err)
        });
        this.categoryService.getCategoryById(params['id']).subscribe(
          {
            next: (res) => {
              this.category = res;
            },
            error: (err) => console.log(err)
        });
      }
    })
  }



}
