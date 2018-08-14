import { Routes } from '@angular/router';

import { PlacementComponent } from './placement/placement.component';
import { NominalComponent } from './nominal/nominal.component';
import { ApprovalComponent } from './approval/approval.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';

export const FinancialRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'placement',
            component: PlacementComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'nominal',
            component: NominalComponent
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
