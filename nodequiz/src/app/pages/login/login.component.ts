/**
 * Author: Lea Trueworthy
 * Description: Login page
 */
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;
  validEmployeesId: [1007, 1008, 1009, 1010, 1011];
  cookieValue = "meow";

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]

    });
  }

  login() {
    const employeeId = this.form.controls['employeeId'].value;
    console.log(employeeId);

    this.http.get('/api/employees/' + employeeId).subscribe(res => {
      if (res) {
        this.cookieService.set('isAuthenticated', 'true', 1);
        this.cookieService.set('employeeId', employeeId)
        this.cookieValue = this.cookieService.get('employeeId') 
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = "Invalid, please try again.";
      }
    })
  }
}