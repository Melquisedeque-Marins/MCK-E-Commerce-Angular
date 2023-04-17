import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input() visible:boolean = false;
  @Input() messageTitle:string = "Produto não encontrado!";
  @Input() messageText:string = "Tente mais tarde";
  @Input() buttonText:string = 'Reset'
  @Input() resetLinkRoute:string = '/';
  
  constructor() { }

  ngOnInit(): void {
  }

}
