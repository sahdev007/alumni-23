import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { AdminJobsComponent } from '../career-jobs/admin-jobs/admin-jobs.component';
import { AlumniJobsComponent } from '../career-jobs/alumni-jobs/alumni-jobs.component';
import { AddJobComponent } from '../career-jobs/add-job/add-job.component';
import { MentorComponent } from '../mentorship/mentor/mentor.component';
import { MenteeComponent } from '../mentorship/mentee/mentee.component';
import { ParticipateInAdmissionPanelComponent } from './participate-in-admission-panel/participate-in-admission-panel.component';
import { OfferExpertiseComponent } from './offer-expertise/offer-expertise.component';
import { ShareOpportunitiesComponent } from './share-opportunities/share-opportunities.component';
import { ViewJobComponent } from '../career-jobs/view-job/view-job.component';
import { JobTypesComponent } from '../career-jobs/job-types/job-types.component';
import { AddEditJobTypeComponent } from '../career-jobs/add-edit-job-type/add-edit-job-type.component';
import { ViewJobTypeComponent } from '../career-jobs/view-job-type/view-job-type.component';
import { ViewSpecialProjectComponent } from './view-special-project/view-special-project.component';
import { AddEditSpecialProjectComponent } from './add-edit-special-project/add-edit-special-project.component';
import { ViewAdmissionPanelComponent } from './view-admission-panel/view-admission-panel.component';
import { AddEditAdmissionPanelComponent } from './add-edit-admission-panel/add-edit-admission-panel.component';
import { AddEditShareOpportunityComponent } from './add-edit-share-opportunity/add-edit-share-opportunity.component';
import { ViewShareOpportunitiesComponent } from './view-share-opportunities/view-share-opportunities.component';
import { ViewOfferExpertiseComponent } from './view-offer-expertise/view-offer-expertise.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'special-projects',
        component: SpecialProjectsComponent
      },
      {
        path: 'add-edit-special-projects',
        component: AddEditSpecialProjectComponent
      },
      {
        path: 'view-special-project',
        component: ViewSpecialProjectComponent
      },
      {
        path: 'participate-in-admission-panel',
        component: ParticipateInAdmissionPanelComponent
      },
      {
        path: 'view-admission-panel',
        component: ViewAdmissionPanelComponent
      },
      {
        path: 'add-edit-admission-panel',
        component: AddEditAdmissionPanelComponent
      },
      {
        path: 'offer-expertise',
        component: OfferExpertiseComponent
      },
      {
        path: 'view-offer-expertise',
        component: ViewOfferExpertiseComponent
      },
      {
        path: 'share-opportunities',
        component: ShareOpportunitiesComponent
      },
      {
        path: 'view-share-opportunities',
        component: ViewShareOpportunitiesComponent
      },
      {
        path: 'add-edit-share-opportunities',
        component: AddEditShareOpportunityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborateRoutingModule { }
