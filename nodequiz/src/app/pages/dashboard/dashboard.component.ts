/**
 * Author: Lea Trueworthy
 * Description: Home page after signed in 
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  prez: any;

  constructor(private router: Router, private cookie: CookieService) {
    this.prez = [
      {id: 101, name: 'HTML', Description: 'Learn about HTML and CSS'},
      {id: 102, name: 'Javascript', Description: 'Learn about Javascript'},
      {id: 103, name: 'Node.js', Description: 'Learn about NODE'},
    ];
   }

  logout() {
    console.log('clicked logout');
    this.cookie.delete('isAuthenticated');
    this.router.navigate(["/session/login"]);
  }
  ngOnInit() {
  }

}