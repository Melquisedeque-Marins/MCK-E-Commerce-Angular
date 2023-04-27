import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/Address';
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

  constructor(
              private formBuilder: FormBuilder,
              private router: Router,
              private postalCodeService: PostalCodeService
              ) { }

  ngOnInit(): void {
    this.createCpSearchForm();
    this.createRegisterAddressForm();
  }
  
  get municipality() {
    return this.registerAddressForm.get('municipality')!;
  }
  
  get postalDesignation() {
    return this.registerAddressForm.get('postalDesignation')!;
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
      postalDesignation: ['', [Validators.required]],
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
        console.log(res)
        console.log(this.addressBase.concelho)
      }
    })
  }
  
  onSubmit() {
    this.isSubmited = true;
    console.log('apertou o botão')
    if(this.registerAddressForm.invalid) return;
    console.log(this.registerAddressForm.value)
      this.router.navigateByUrl('/checkout')
  }

}
