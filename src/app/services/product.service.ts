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

  getAllProducts():Observable<SpringPage<Product>> {  
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?page=0&size=10`);
  }

  getAllPromoProducts(catId:number):Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?categoryId=${catId}&isInSale=true`);
  }

  getAllRelatedProducts(catId:number):Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?categoryId=${catId}`);
  }

  getAllProductsBySearchTerme(searchTerm:string) {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?name=${searchTerm}&page=0&size=10`);
  }
}
