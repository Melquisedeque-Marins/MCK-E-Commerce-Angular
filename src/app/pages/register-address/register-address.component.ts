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
  isSubmited!: boolean;
  addressBase: Address = new Address();
  deliveryAddress!: Address;

  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private postalCodeService: PostalCodeService,
              private addressService: AddressService
              ) { 
                this.addressService.getDeliveryAddressObservable().subscribe((address) => {
                  this.addressBase = address;
                })
              }

  ngOnInit(): void {
    this.createCpSearchForm(this.addressBase);
    this.createRegisterAddressForm(this.addressBase);
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

  createCpSearchForm(address: Address) {
    this.searchCPForm = this.formBuilder.group({
      postalCode: [address.CP, [Validators.required]]
    })
  }
  
  createRegisterAddressForm(address: Address) {
    this.registerAddressForm = this.formBuilder.group({
      municipality: [address.Concelho, [Validators.required]],
      district: [address.Distrito, [Validators.required]],
      locality: [address.Localidade , [Validators.required]],
      street: [address.ruas, [Validators.required] ],
      number: [address.number, [Validators.required]],
      complement: [address.complement],
      referencePoint: [address.referencePoint, [Validators.required]],
      name: [address.name, [Validators.required, Validators.minLength(10)]],
      docIdentity: [address.identificationDocument, [Validators.minLength(7)]] 
    });
  }
  
  findAddress(cp:string) {
    
    if(cp === this.addressBase.CP) return;
    this.postalCodeService.findAddress(cp).subscribe({
      next: (res) => {
        this.addressBase = res;
        console.log(res)
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
    this.number.setValue('');
    this.complement.setValue('');
    this.referencePoint.setValue('');
    this.name.setValue('');
    this.docIdentity.setValue('');
  }
  
  onSubmit() {
    this.isSubmited = true;
    if(this.registerAddressForm.invalid) return;
    let address = this.converFormToAddress();
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
    address.complement = formData.complement;
    address.referencePoint = formData.referencePoint;
    address.identificationDocument = formData.docIdentity;
    address.CP = cp.postalCode;
    return address;

  }

  clearForm() {
    this.createRegisterAddressForm(new Address());
    this.createCpSearchForm(new Address());
    this.router.navigateByUrl('/checkout/register-address');
    this.addressService.clearForm();
  }



}
