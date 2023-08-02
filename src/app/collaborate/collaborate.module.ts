import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborateRoutingModule } from './collaborate-routing.module';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { AdminJobsComponent } from './careers-and-jobs/admin-jobs/admin-jobs.component';
import { AlumniJobsComponent } from './careers-and-jobs/alumni-jobs/alumni-jobs.component';
import { AddJobTypeComponent } from './careers-and-jobs/add-job-type/add-job-type.component';
import { AddJobComponent } from './careers-and-jobs/add-job/add-job.component';
import { MentorComponent } from './mentorship/mentor/mentor.component';
import { MenteeComponent } from './mentorship/mentee/mentee.component';
import { ParticipateInAdmissionPanelComponent } from './participate-in-admission-panel/participate-in-admission-panel.component';
import { OfferExpertiseComponent } from './offer-expertise/offer-expertise.component';
import { ShareOpportunitiesComponent } from './share-opportunities/share-opportunities.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    SpecialProjectsComponent,
    AdminJobsComponent,
    AlumniJobsComponent,
    AddJobTypeComponent,
    AddJobComponent,
    MentorComponent,
    MenteeComponent,
    ParticipateInAdmissionPanelComponent,
    OfferExpertiseComponent,
    ShareOpportunitiesComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    CollaborateRoutingModule,

    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class CollaborateModule { }
