import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CumulativeSummaryComponent } from './pages/cumulative-summary/cumulative-summary.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './shared';
import { AuthGuard } from './shared/guard/auth.guard'

export const AppRoutingModule = [
  {
    path: 'dashboard',
    component: BaseLayoutComponent,
    children: [{
      path: ' ',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'cumulative-summary',
      component: CumulativeSummaryComponent,
      canActivate: [AuthGuard]
    }
    ]
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'non-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];