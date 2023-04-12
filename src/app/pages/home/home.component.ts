import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Category';

import { Product } from 'src/app/Product';
import { CategoryService } from 'src/app/services/category.service';

import { ProductService } from 'src/app/services/product.service';
import { SpringPage } from 'src/app/SpringPage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product!:Product;
  productList: Product[] = [];
  promoProductsList: Product[] = [];
  categoryList: Category[] = [];
  page!:SpringPage<Product>;

  constructor(private productService: ProductService, private categoryService: CategoryService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params['searchTerm']){
        this.productService.getAllProductsBySearchTerme(params['searchTerm']).subscribe(
          {
            next: (res) => {
              this.productList = res.content
            },
            error: (err) => console.log(err)
        })
      } else {
        this.productService.getAllProducts().subscribe(
          {
            next: (res) => {
              this.productList = res.content
            },
            error: (err) => console.log(err)
        })
      }
    })

    this.productService.getAllPromoProducts(0).subscribe(
      {
        next: (res) => {
          this.promoProductsList = res.content;
          console.log(res)
        },
        error: (err) => console.log(err)
    })

    this.categoryService.getCategories().subscribe({
      next: res =>  {
         this.categoryList = res;
         
      }
      
    })
  }

 }
