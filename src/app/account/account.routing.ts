import { Routes } from '@angular/router';

import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccountsManagerComponent } from './accountsmanager/accountsmanager.component';
import { InvestmentManagerComponent } from './investmentmanager/investmentmanager.component';
import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';
import { TellerComponent } from './teller/teller.component';
import { TreasuryComponent } from './treasury/treasury.component';

export const AccountRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'accountlist',
            component: AccountlistComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'accountsmanager',
            component: AccountsManagerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'investmentmanager',
            component: InvestmentManagerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'report',
            component: ReportComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'setup',
            component: SetupComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'teller',
            component: TellerComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'treasury',
            component: TreasuryComponent
        }]
    }
];
