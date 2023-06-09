import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardDetailsComponent } from './components/product-card-details/product-card-details.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { ReviewSumaryComponent } from './components/review-sumary/review-sumary.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CategoriesBadgeComponent } from './components/categories-badge/categories-badge.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { CartComponent } from './pages/cart/cart.component';
import { GenericButtonComponent } from './shared/generic-button/generic-button.component';
import { OrderSumaryComponent } from './components/order-sumary/order-sumary.component';
import { ProductBannerComponent } from './components/product-banner/product-banner.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CheckoutSumaryComponent } from './components/checkout-sumary/checkout-sumary.component';
import { RegisterAddressComponent } from './pages/register-address/register-address.component';
import { DeliverySumaryComponent } from './components/delivery-sumary/delivery-sumary.component';
import { CheckoutOrderSumaryComponent } from './components/checkout-order-sumary/checkout-order-sumary.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { RatingComponent } from './pages/rating/rating.component';
import { PixPaymentComponent } from './components/pix-payment/pix-payment.component';
import { CardPaymentComponent } from './components/card-payment/card-payment.component';
import { BankSlipPaymentComponent } from './components/bank-slip-payment/bank-slip-payment.component';
import { PaypalPaymentComponent } from './components/paypal-payment/paypal-payment.component';
import { CategoriesComponent } from './pages/categories/categories.component';
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
    CategoriesBadgeComponent,
    CategoryCardComponent,
    SectionTitleComponent,
    ItemCartComponent,
    CartComponent,
    GenericButtonComponent,
    OrderSumaryComponent,
    ProductBannerComponent,
    NotFoundComponent,
    CheckoutComponent,
    CheckoutSumaryComponent,
    RegisterAddressComponent,
    DeliverySumaryComponent,
    CheckoutOrderSumaryComponent,
    PaymentCardComponent,
    RatingComponent,
    PixPaymentComponent,
    CardPaymentComponent,
    BankSlipPaymentComponent,
    PaypalPaymentComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080'],
          sendAccessToken: true
      }
  }),
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
