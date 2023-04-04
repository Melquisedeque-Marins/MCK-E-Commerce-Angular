import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'products/search', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
