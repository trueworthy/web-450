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

  constructor(private router: Router, private cookie: CookieService) { }

  ngOnInit() {
  }

}