import { ReportsComponent } from './reports/reports.component';
import { CorporateResolver } from './../classes/corporate-resolver';
import { IndividualResolver } from './../classes/individual-resolver';
import { JeditComponent } from './joint/jedit/jedit.component';
import { JaddComponent } from './joint/jadd/jadd.component';
import { JointComponent } from './joint/joint.component';
import { CeditComponent } from './corporate/cedit/cedit.component';
import { CaddComponent } from './corporate/cadd/cadd.component';
import { IAddComponent } from './individuals/iadd/iadd.component';
import { IndividualsComponent } from './individuals/individuals.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IEditComponent } from './individuals/iedit/iedit.component';
import { CorporateComponent } from './corporate/corporate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'reports',
    data: {
      breadcrumbs: true,
      text: 'Reports'
    },
    children: [
      {
        path: '',
        component: ReportsComponent
      }
    ]
  },
  {
    path: 'individual',
    data: {
      breadcrumbs: true,
      text: 'Individual'
    },
    children: [
      {
        path: '',
        component: IndividualsComponent,
      },
      {
        path: 'add',
        component: IAddComponent,
        data: {
          breadcrumbs: true,
          text: 'Add'
        }
      },
      {
        path: 'edit/:id',
        component: IEditComponent,
        resolve: { individual: IndividualResolver },
        data: {
          breadcrumbs: true,
          text: 'Edit'
        }
      }
    ]
  },
  {
    path: 'corporate',
    data: {
      breadcrumbs: true,
      text: 'Corporate'
    },
    children: [
      {
        path: '',
        component: CorporateComponent,
      },
      {
        path: 'add',
        component: CaddComponent,
        data: {
          breadcrumbs: true,
          text: 'Add'
        }
      },
      {
        path: 'edit/:id',
        component: CeditComponent,
        resolve: { corporate: CorporateResolver },
        data: {
          breadcrumbs: true,
          text: 'Edit'
        },
      }
    ]
  },
  {
    path: 'joint',
    data: {
      breadcrumbs: true,
      text: 'Joint'
    },
    children: [
      {
        path: '',
        component: JointComponent,
      },
      {
        path: 'add',
        component: JaddComponent,
        data: {
          breadcrumbs: true,
          text: 'Add'
        }
      },
      {
        path: 'edit',
        component: JeditComponent,
        data: {
          breadcrumbs: true,
          text: 'Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
