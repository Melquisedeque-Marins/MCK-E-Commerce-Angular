import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.css']
})
export class RegisterAddressComponent implements OnInit {
  registerAddressForm!: FormGroup;
  isSubmited: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterAddressForm();
  }


  createRegisterAddressForm() {
    this.registerAddressForm = this.formBuilder.group({
      district: ['', Validators.required],
      municipio: ['', [Validators.required]],
      locale: ['', [Validators.required]],
      center: ['', [Validators.required]],
      postalDesignation: ['', [Validators.required]],
      counsil: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: [''],
      localeReference: [''],
      name: ['', [Validators.required]],
      docIdentity: [''] 
    });
  }

  get district() {
    return this.registerAddressForm.get('district')!;
  }

  get municipio() {
    return this.registerAddressForm.get('municipio')!;
  }

  get locale() {
    return this.registerAddressForm.get('locale')!;
  }

  get center() {
    return this.registerAddressForm.get('center')!;
  }

  get postalDesignation() {
    return this.registerAddressForm.get('postalDesignation')!;
  }

  get fc() {
    return this.registerAddressForm.controls;
  }

  onSubmit() {
    this.isSubmited = true;
    
    if(this.registerAddressForm.invalid) return;
  }

}
