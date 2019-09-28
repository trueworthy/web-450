import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.routing';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    CumulativeSummaryComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }