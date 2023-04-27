import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private deliveryAddress: Address = this.getDeliveryAddressFromLocalStorage();
  private deliveryAddressSubject: BehaviorSubject<Address> = new BehaviorSubject(this.deliveryAddress)
  constructor() { }

  saveDeliveryAddress(address:Address) {
    this.deliveryAddress = address;
    this.setDeliveryAddressToLocalStorage();
  }

  getDeliveryAddressObservable(): Observable<Address> {
    return this.deliveryAddressSubject.asObservable();
  }

  private setDeliveryAddressToLocalStorage():void {
    const addressJson = JSON.stringify(this.deliveryAddress);
    localStorage.setItem('delivery-address', addressJson);
    this.deliveryAddressSubject.next(this.deliveryAddress);
  }

  private getDeliveryAddressFromLocalStorage():Address {
    const deliveryAddressJson = localStorage.getItem('delivery-address');
    return deliveryAddressJson? JSON.parse(deliveryAddressJson): new Address();
  }

}
