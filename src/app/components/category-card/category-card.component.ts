import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
@Input() cardImg: string = '';
@Input() cardTitle: string = '';




  constructor() { }

  ngOnInit(): void {
  }

}
