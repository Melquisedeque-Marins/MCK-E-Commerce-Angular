import { Component, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/Product';

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
  page!:SpringPage<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      {
        next: (res) => {
          this.productList = res.content
          console.log(this.productList)
        },
        error: (err) => console.log('error')
    });
  }
  /*
  ngOnInit(): void {
    this.productService.getProduct(1).subscribe(
      {
        next: (res) => {
          this.product = {
            id: res.id,
            name: res.name,
            description: res.description,
            price: res.price,
            imgUrl: res.imgUrl,
            coverImg: res.coverImg,
            qtyReviews: res.qtyReviews,
            rate: res.rate,
            skuCode: res.skuCode
          }
        },
        error: (err) => console.log('error')
    });
  }
*/

}
