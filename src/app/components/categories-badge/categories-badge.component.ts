import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-badge',
  templateUrl: './categories-badge.component.html',
  styleUrls: ['./categories-badge.component.css']
})
export class CategoriesBadgeComponent implements OnInit {
@Input() categoryList:Category[] =  [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    
  }

}
