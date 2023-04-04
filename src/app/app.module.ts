import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { RatingModule } from 'ng-starrating';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ReviewSumaryComponent } from './components/review-sumary/review-sumary.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    ProductCardDetailsComponent,
    ProductDetailsComponent,
    ReviewCardComponent,
    ReviewSumaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
