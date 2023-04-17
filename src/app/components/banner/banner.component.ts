import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() background:string = '#CCC';
  @Input() buttonColor:string = '';
  @Input() direction:string = 'row';
  @Input() bannerImg:string = '';
  @Input() bannerTitle:string = '';
  @Input() bannerText:string = '';
  @Input() textColor:string = '';
  @Input() buttonText:string = 'Saiba mais';

  constructor() { }

  ngOnInit(): void {
  }

}
