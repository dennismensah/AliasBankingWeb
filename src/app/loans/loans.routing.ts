import { Routes } from '@angular/router';

import { ApplicationComponent } from './application/application.component';
import { ApprovalComponent } from './approval/approval.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';

export const LoansRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'application',
            component: ApplicationComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'approval',
            component: ApprovalComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'disbursement',
            component: DisbursementComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'report',
            component: ReportComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'setup',
            component: SetupComponent
        }]
    }
];
