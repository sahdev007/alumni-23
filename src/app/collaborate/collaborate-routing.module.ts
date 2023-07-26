import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { AdminJobsComponent } from './careers-and-jobs/admin-jobs/admin-jobs.component';
import { AlumniJobsComponent } from './careers-and-jobs/alumni-jobs/alumni-jobs.component';
import { AddJobTypeComponent } from './careers-and-jobs/add-job-type/add-job-type.component';
import { AddJobComponent } from './careers-and-jobs/add-job/add-job.component';
import { MentorComponent } from './mentorship/mentor/mentor.component';
import { MenteeComponent } from './mentorship/mentee/mentee.component';
import { ParticipateInAdmissionPanelComponent } from './participate-in-admission-panel/participate-in-admission-panel.component';
import { OfferExpertiseComponent } from './offer-expertise/offer-expertise.component';
import { ShareOpportunitiesComponent } from './share-opportunities/share-opportunities.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mentor',
        component: MentorComponent
      },
      {
        path: 'mentee',
        component: MenteeComponent
      },
      {
        path: 'admin-jobs',
        component: AdminJobsComponent,
      },
      {
        path: 'alumni-jobs',
        component: AlumniJobsComponent,
      },
      {
        path: 'add-job',
        component: AddJobComponent,
      },
      {
        path: 'add-job-type',
        component: AddJobTypeComponent,
      },
      {
        path: 'special-projects',
        component: SpecialProjectsComponent,
      },
      {
        path: 'participate-in-admission-panel',
        component: ParticipateInAdmissionPanelComponent,
      },
      {
        path: 'offer-expertise',
        component: OfferExpertiseComponent,
      },
      {
        path: 'share-opportunities',
        component: ShareOpportunitiesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborateRoutingModule { }
