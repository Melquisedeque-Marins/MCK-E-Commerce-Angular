import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

import { environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { SpringPage } from '../SpringPage';

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

  getAllPromoProducts():Observable<SpringPage<Product>> {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?isInSale=true`);
  }

  getAllProductsBySearchTerme(searchTerm:string) {
    return this.http.get<SpringPage<Product>>(`${this.baseApiUrl}?name=${searchTerm}&page=0&size=10`);
  }
}
