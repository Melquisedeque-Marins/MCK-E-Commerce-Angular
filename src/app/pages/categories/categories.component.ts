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

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute:ActivatedRoute,
    ) {
     
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params['id']) {
        this.productService.getAllProductsPerCategory(params['id']).subscribe( 
          {
            next: (res) => {
              this.productList = res.content
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
