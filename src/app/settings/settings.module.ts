import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { SettingsRoutes } from './settings.routing';

import { UsermanagerComponent } from './usermanager/usermanager.component';
import { CommonsequenceComponent } from './commonsequence/commonsequence.component';
import { GeneralledgerComponent } from './generalledger/generalledger.component';
import { BranchComponent } from './branch/branch.component';
import { BankComponent } from './bank/bank.component';
import { ApprovalruleComponent } from './approvalrule/approvalrule.component';
import { SessionComponent } from './session/session.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    UsermanagerComponent, CommonsequenceComponent, GeneralledgerComponent,
    BranchComponent, BankComponent, ApprovalruleComponent, SessionComponent,
    SetupComponent]
})
export class SettingsModule { }
