import { Routes } from '@angular/router';

import { UsermanagerComponent } from './usermanager/usermanager.component';
import { CommonsequenceComponent } from './commonsequence/commonsequence.component';
import { GeneralledgerComponent } from './generalledger/generalledger.component';
import { BranchComponent } from './branch/branch.component';
import { BankComponent } from './bank/bank.component';
import { ApprovalruleComponent } from './approvalrule/approvalrule.component';
import { SessionComponent } from './session/session.component';
import { SetupComponent } from './setup/setup.component';

export const SettingsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'usermanager',
            component: UsermanagerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'commonsequence',
            component: CommonsequenceComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'generalledger',
            component: GeneralledgerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'branch',
            component: BranchComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'bank',
            component: BankComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'approvalrule',
            component: ApprovalruleComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'session',
            component: SessionComponent
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
