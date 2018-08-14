import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { FinancialRoutes } from './finacial.routing';


import { PlacementComponent } from './placement/placement.component';
import { NominalComponent } from './nominal/nominal.component';
import { ApprovalComponent } from './approval/approval.component';
import { DisbursementComponent } from './disbursement/disbursement.component';
import { ReportComponent } from './report/report.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FinancialRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [PlacementComponent, NominalComponent, ApprovalComponent, DisbursementComponent, ReportComponent, SetupComponent]
})
export class FinancialModule { }
