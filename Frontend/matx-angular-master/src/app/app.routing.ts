import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProductionComponent } from './production/production.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'admin/product/search',
    pathMatch: 'full'
  },
  { path: 'product/home', component: ProductionComponent },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session' }
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      {
        path: 'admin',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.AppFormsModule),
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  },
];

