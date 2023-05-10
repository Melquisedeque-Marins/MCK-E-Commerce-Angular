import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { RegisterAddressComponent } from './pages/register-address/register-address.component';
import { LoggedGuard } from './guard/logged.guard';
import { RatingComponent } from './pages/rating/rating.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'busca/:searchTerm', component: HomeComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent },
  {path: 'checkout/register-address', component: RegisterAddressComponent, pathMatch: 'full', canActivate: [ LoggedGuard ] },
  {path: 'checkout', component: CheckoutComponent, canActivate: [ LoggedGuard ] },
  {path: 'rating/:id', component: RatingComponent, canActivate: [ LoggedGuard ] },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
