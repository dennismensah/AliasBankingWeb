import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { ApprovalRoutes } from './approval.routing';

import { SmsComponent } from './sms/sms.component';
import { ApprovalComponent } from './approval/approval.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ApprovalRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [SmsComponent, ApprovalComponent]
})
export class ApprovalModule { }
