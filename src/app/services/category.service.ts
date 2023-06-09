import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseApiUrl: string = environment.productApiUrl;


  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseApiUrl}/cats`);
  }

  getCategoryById(id:number):Observable<Category> {
    return this.http.get<Category>(`${this.baseApiUrl}/cats/${id}`);
  }
}
