import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cart } from 'src/app/Cart';
import { Category } from 'src/app/Category';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  form!: FormGroup;
  searchTerm:string = '';
  categoryList: Category[] = [];
  cart!:Cart;
  isLogged: boolean = false;

  constructor(private formBuilder: FormBuilder,
      private categoryService: CategoryService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private cartService: CartService,
      private authService:AuthService
      ) {
        
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
      })
      this.authService.getIsLoggedObsarvable().subscribe((isLogged) => {
        this.isLogged = isLogged;
      })
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
    this.categoryService.getCategories().subscribe({
      next: res =>  {
         this.categoryList = res;
      }
    })
  }

  search(searchTerm:string): void {
    if(searchTerm)
    this.router.navigate([`/busca/${searchTerm}`])
  }

  login() {
    this.authService.login();
    console.log(this.isLogged)
  }
  logout() {
    this.authService.logout();
  }


}

