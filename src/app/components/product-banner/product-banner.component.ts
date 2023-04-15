import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrls: ['./product-banner.component.css']
})
export class ProductBannerComponent implements OnInit {
  @Input() product!: Product ;
  @Input() background:string = '';
  @Input() buttonColor:string = '';
  @Input() buttonHoverColor:string = '';
  @Input() direction:string = '';
  @Input() bannerImg:string = '';
  @Input() bannerTitle:string = '';
  @Input() bannerText:string = '';
  @Input() buttonText:string = '';
  @Input() textColor:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
