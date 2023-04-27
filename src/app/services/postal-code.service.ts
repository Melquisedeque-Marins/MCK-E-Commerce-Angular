import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/Address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostalCodeService {

  constructor(private http: HttpClient) { }


findAddress(cp:string):Observable<Address> {
  return this.http.get<Address>(`https://geoapi.pt/cp/${cp}`);
}

}
