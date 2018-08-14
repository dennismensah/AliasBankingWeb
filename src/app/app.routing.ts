import { AuthcallbackComponent } from './authcallback/authcallback.component';
import { AuthGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: 'authcallback',
        component: AuthcallbackComponent
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
        canActivate: [AuthGuard],
        data: {
            breadcrumbs: 'Home'
        },
      children: [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
    },
    {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule',
        data: {
            breadcrumbs: true,
            text: 'Customers'
        },
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
    },
    {
        path: 'approval',
        loadChildren: './approval/approval.module#ApprovalModule'
    },
    {
        path: 'financial',
        loadChildren: './financial/financial.module#FinancialModule'
    },
    {
        path: 'insurance',
        loadChildren: './insurance/insurance.module#InsuranceModule'
    },
    {
        path: 'loans',
        loadChildren: './loans/loans.module#LoansModule'
    },
    {
        path: 'pension',
        loadChildren: './pension/pension.module#PensionModule'
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },

  ]},
   {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    },
    /*{
        path: '**',
        component: NotfoundComponent
    }*/
];
