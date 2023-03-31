import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseApiUrl:string = environment.reviewApiUrl;
  
  constructor(private http: HttpClient) { }

  getReviewsByProduct(id:number):Observable<Review[]> {
    return this.http.get<Review[]>(`${this.baseApiUrl}/${id}`);
  }
}
