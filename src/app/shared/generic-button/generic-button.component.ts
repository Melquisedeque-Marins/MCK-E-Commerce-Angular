import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {
  @Input() buttonColor:string = '';
  @Input() buttonHoverColor:string = '';
  @Input() buttonText:string = '';
  @Input() fontSize:string = '';
  @Input() width:string = '';
  @Input() padding:string = '15px 30px';


  constructor() { }

  ngOnInit(): void {
  }

}
