import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-router-page',
  templateUrl: './auth-router-page.component.html',
  styleUrls: ['./auth-router-page.component.css']
})
export class AuthRouterPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      try {
        const url = localStorage.getItem('return-url')
    
        if (url) this.router.navigateByUrl(url)
        
        else this.router.navigateByUrl(window.location.origin)
      } catch (error) {
        console.log('No return URL found');
      }
    }, 300);
  }

}
