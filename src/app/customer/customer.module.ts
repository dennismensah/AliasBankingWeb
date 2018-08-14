import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { MaterialModule } from '../app.module';
import { CorporateComponent } from './corporate/corporate.component';
import { JointComponent } from './joint/joint.component';
import { CaddComponent } from './corporate/cadd/cadd.component';
import { CeditComponent } from './corporate/cedit/cedit.component';
import { JaddComponent } from './joint/jadd/jadd.component';
import { JeditComponent } from './joint/jedit/jedit.component';
import { IAddComponent } from './individuals/iadd/iadd.component';
import { IEditComponent } from './individuals/iedit/iedit.component';
import { ReportsComponent } from './reports/reports.component';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [HomeComponent, IndividualsComponent, CorporateComponent, JointComponent, IAddComponent,
    IEditComponent, JeditComponent, CaddComponent, CeditComponent, JaddComponent, ReportsComponent]
})
export class CustomerModule { }
