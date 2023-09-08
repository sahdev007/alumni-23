import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AlumniJobsComponent } from './alumni-jobs/alumni-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { JobTypesComponent } from './job-types/job-types.component';
import { AddEditJobTypeComponent } from './add-edit-job-type/add-edit-job-type.component';
import { ViewJobTypeComponent } from './view-job-type/view-job-type.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin-jobs',
        component: AdminJobsComponent
      },
      {
        path: 'alumni-jobs',
        component: AlumniJobsComponent
      },
      {
        path: 'add-job',
        component: AddJobComponent
      },
      {
        path: 'view-job',
        component: ViewJobComponent
      },
      {
        path: 'job-type',
        component: JobTypesComponent
      },
      {
        path: 'add-edit-job-type',
        component: AddEditJobTypeComponent
      },
      {
        path: 'view-job-type',
        component: ViewJobTypeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerJobsRoutingModule { }
