import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() background:string = '';
  @Input() buttonColor:string = '';
  @Input() direction:string = '';
  @Input() bannerImg:string = '';
  @Input() bannerTitle:string = '';
  @Input() bannerText:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
