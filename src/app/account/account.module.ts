import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { AccountRoutes } from './account.routing';

import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { TellerComponent } from './teller/teller.component';
import { TreasuryComponent } from './treasury/treasury.component';
import { InvestmentManagerComponent } from './investmentmanager/investmentmanager.component';
import { AccountsManagerComponent } from './accountsmanager/accountsmanager.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccountRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    ReportComponent,
    SetupComponent,
    AccountlistComponent,
    InvestmentManagerComponent,
    AccountsManagerComponent,
    TellerComponent,
    TreasuryComponent,
  ]
})

export class AccountModule { }
