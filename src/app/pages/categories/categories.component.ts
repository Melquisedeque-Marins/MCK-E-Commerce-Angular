import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  filterForm!: FormGroup;

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private activatedRoute:ActivatedRoute,
    ) {
      
     
    }

  ngOnInit(): void {
    if (this.productList.length !== 0) 
      return;
    
    this.activatedRoute.params.subscribe( params => {
      this.highestPrice = 0;
      this.brandList = [];
      if (params['id']) {
        this.productService.getAllProductsPerCategory(params['id']).subscribe( 
          {
            next: (res) => {
              this.productList = res.content
              this.productList.map(p => {
                if (p.brand !== null && !this.brandList.includes(p.brand)) {
                  this.brandList.push(p.brand)
                }
                if (p.price >= this.highestPrice) {
                  this.highestPrice = p.price
                }
              })
              if (this.highestPrice/1000 < 1)
                this.highestPrice = Math.round((this.highestPrice%10) * 10)
                else 
                this.highestPrice = Math.round(this.highestPrice/1000) * 1000
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

  get price() {
    return this.filterForm.get('price')!;
  }

  createfilterForm(field: any) {
    this.filterForm = this.formBuilder.group({
      price: [field.price],
      rating: [field.rating],
      brand: [field.brand]
    })
  }

  onFilter(minPrice: number, maxPrice: number) {
    this.activatedRoute.params.subscribe( params => {

    this.productService.getAllProductsByFilter(minPrice,maxPrice, params['id']).subscribe(
      {
        next: (res) => {
          this.productList = res.content;
        },
        error: (err) => console.log(err)
    });
  })
}}
