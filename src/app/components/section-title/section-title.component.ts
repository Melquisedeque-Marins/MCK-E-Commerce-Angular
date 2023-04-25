import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.css']
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() width: string = '90%';
  @Input() fontSize: string = '28px';


  constructor() { }

  ngOnInit(): void {
  }

}
