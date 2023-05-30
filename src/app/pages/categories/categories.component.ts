import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService,
    private categoryService: CategoryService,
    private activatedRoute:ActivatedRoute,
    ) {
     
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      if (params['id']) {
        this.productService.getAllRelatedProducts(params['id']).subscribe( 
          {
            next: (res) => {
              this.productList = res.content
            },
            error: (err) => console.log(err)
        });
      }
    })
  }

}
