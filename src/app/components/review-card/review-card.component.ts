import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
  @Input() review!: Review;

  constructor() { }


  ngOnInit(): void {
  }

}
