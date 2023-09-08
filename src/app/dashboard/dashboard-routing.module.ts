import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ManageUsersRequestComponent } from './manage-users-request/manage-users-request.component';
import { UserRoleComponent } from './user-role/user-role.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DefaultComponent,
        data: {
          title: 'Default'
        }
      },
      {
        path: 'all-users',
        component: AllUsersComponent,
        data: {
          title: 'All User'
        }
      },
      {
        path: 'user-role',
        component: UserRoleComponent
      },
      {
        path: 'manage-request',
        component: ManageUsersRequestComponent,
        data: {
          title: 'Manage User'
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'digital-marketing',
        component: DigitalMarketingComponent,
        data: {
          title: 'Digital Marketing'
        }
      },
      {
        path: 'human-resources',
        component: HumanResourcesComponent,
        data: {
          title: 'Human Resources'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
