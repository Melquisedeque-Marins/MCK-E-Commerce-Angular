import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/Address';
import { AddressService } from 'src/app/services/address.service';
import { PostalCodeService } from 'src/app/services/postal-code.service';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {
  registerAddressForm!: FormGroup;
  searchCPForm!: FormGroup;
  isSubmited: boolean = false;
  addressBase: Address = new Address();
  deliveryAddress!: Address;

  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private postalCodeService: PostalCodeService,
              private addressService: AddressService
              ) { }

  ngOnInit(): void {
    this.createCpSearchForm();
    this.createRegisterAddressForm();
  }
  
  get municipality() {
    return this.registerAddressForm.get('municipality')!;
  }
  
  get district() {
    return this.registerAddressForm.get('district')!;
    }

  get locality() {
    return this.registerAddressForm.get('locality')!;
  }
  
  get street() {
    return this.registerAddressForm.get('street')!;
  }

  get number() {
    return this.registerAddressForm.get('number')!;
  }
  
  get complement() {
    return this.registerAddressForm.get('complement')!;
  }
  
  get referencePoint() {
    return this.registerAddressForm.get('referencePoint')!;
  }
  
  get name() {
    return this.registerAddressForm.get('name')!;
  }
  
  get docIdentity() {
    return this.registerAddressForm.get('docIdentity')!;
  }

  get postalCode() {
    return this.searchCPForm.get('postalCode');
  }

  createCpSearchForm() {
    this.searchCPForm = this.formBuilder.group({
      postalCode: ['', [Validators.required]]
    })
  }
  
  createRegisterAddressForm() {
    this.registerAddressForm = this.formBuilder.group({
      municipality: ['', [Validators.required]],
      district: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      street: ['', [Validators.required] ],
      number: ['', [Validators.required]],
      complement: [''],
      referencePoint: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(10)]],
      docIdentity: ['', [Validators.minLength(7)]] 
    });
  }
  
  findAddress(cp:string) {
    this.postalCodeService.findAddress(cp).subscribe({
      next: (res) => {
        this.addressBase = res;
        this.setValuesOnForm(this.addressBase);
      }
    })
  }

  setValuesOnForm(address:Address) {
    this.municipality.setValue(address.Concelho);
    this.locality.setValue(address.Localidade);
    this.district.setValue(address.Distrito);
    this.street.setValue(address.ruas[0]);
    this.municipality.setValue(address.Concelho);
  }
  
  onSubmit() {
    this.isSubmited = true;
    console.log('apertou o botão')
    if(this.registerAddressForm.invalid) return;
    let address = this.converFormToAddress();
    console.log(address)
    this.addressService.saveDeliveryAddress(address)
    this.router.navigateByUrl('/checkout')
  }

  converFormToAddress(): Address {
    let formData = this.registerAddressForm.value;
    let cp = this.searchCPForm.value;
    let address = new Address();
    address.Concelho = formData.municipality;
    address.Distrito = formData.district;
    address.Localidade = formData.locality;
    address.ruas = formData.street;
    address.number = formData.number;
    address.name = formData.name;
    address.CP = cp.postalCode;
    return address;

  }


}
