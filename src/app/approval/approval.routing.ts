import { Routes } from '@angular/router';

import { SmsComponent } from './sms/sms.component';
import { ApprovalComponent } from './approval/approval.component';

export const ApprovalRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'sms',
            component: SmsComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'approval',
            component: ApprovalComponent
        }]
    }
]
