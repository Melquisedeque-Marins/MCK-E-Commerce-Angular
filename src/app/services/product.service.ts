import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

import { environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { SpringPage } from '../models/SpringPage';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseApiUrl:string = environment.productApiUrl;

  constructor(private http: HttpClient) { }

  getProduct(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.baseApiUrl}/${id}`);
  }

  getAllProducts(page?:number):Observable<SpringPage<Product>> {  
    if(page) {
      return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?page=${page}&size=5`);
    }
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?page=0&size=5`);
  }

  getAllPromoProducts(catId:number):Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?categoryId=${catId}&isInSale=true`);
  }

  getAllProductsPerCategory(catId:number):Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}/category?categoryId=${catId}`);
  }

  getAllRelatedProducts(catId:number):Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?categoryId=${catId}`);
  }

  getAllProductsBySearchTerme(searchTerm:string) {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?name=${searchTerm}&page=0&size=10`);
  }

  getAllProductsByFilter(minPrice: number, maxPrice: number, cat: number) {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}/category/filter?min-price=${minPrice}&max-price=${maxPrice}&categoryId=${cat}&page=0&size=10`);
  }


}
