import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { LoansRoutes } from './loans.routing';

import { ApplicationComponent } from './application/application.component';
import { ApprovalComponent } from './approval/approval.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoansRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [ApplicationComponent, ApprovalComponent, DisbursementComponent, ReportComponent, SetupComponent]
})
export class LoansModule { }
