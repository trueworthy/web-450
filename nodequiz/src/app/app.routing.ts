import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {AuthLayoutComponent} from './shared/auth-layout/auth-layout.component'

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
      }
    ]
  },
  {path: '**',
redirectTo: 'session/not-found'}
];