import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { Cart } from 'src/app/Cart';
import { Category } from 'src/app/Category';
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

  constructor(private formBuilder: FormBuilder,
      private categoryService: CategoryService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private cartService: CartService,
      private oauthService:OAuthService) {
        this.configure();
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      this.searchTerm = params['searchTerm'];
    })
      this.cartService.getCartObservable().subscribe((cart) => {
        this.cart = cart;
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

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8088/realms/mck-e-commerce',
    redirectUri: window.location.origin,
    clientId: 'mck-e-commerce-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin());
  }

  login(): void {
    this.oauthService.initImplicitFlowInternal();
  }

  logout(): void {
    this.oauthService.logOut();
  }



}

