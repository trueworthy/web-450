import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import {AuthGuard} from './shared/guards/auth.guard';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';

export const AppRoutes: Routes = [
  { path: '', component: LoginComponent, 
  //canActivate: [AuthGuard] 
},
  { 
    path: 'dashboard',
     component: DashboardComponent 
  },
  { 
    path: 'summary', 
    component: CumulativeSummaryComponent 
},

  // otherwise redirect to home
  { path: '**', redirectTo: 'session/not-found' }
];