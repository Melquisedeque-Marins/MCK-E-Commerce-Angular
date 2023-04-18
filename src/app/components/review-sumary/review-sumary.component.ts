import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-review-sumary',
  templateUrl: './review-sumary.component.html',
  styleUrls: ['./review-sumary.component.css']
})
export class ReviewSumaryComponent implements OnInit {
@Input() product?:Product | any;

  constructor() { }

  ngOnInit(): void {
  }

}
