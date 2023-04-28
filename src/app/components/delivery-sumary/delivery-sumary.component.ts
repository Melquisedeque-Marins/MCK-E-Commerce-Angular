import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-delivery-sumary',
  templateUrl: './delivery-sumary.component.html',
  styleUrls: ['./delivery-sumary.component.css']
})
export class DeliverySumaryComponent implements OnInit {
  @Input() deliveryAddress!: Address;

  constructor(
              private addressService: AddressService
              ) { 
                this.addressService.getDeliveryAddressObservable().subscribe((address) => {
                  this.deliveryAddress = address;
                })
              }

  ngOnInit(): void {
  }

}
