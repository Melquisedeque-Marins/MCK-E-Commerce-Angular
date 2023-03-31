import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/Review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  @Input() reviews: Review[] = [];
  @Input() review!: Review;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {

  }

}
