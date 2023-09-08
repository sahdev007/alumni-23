import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerJobsRoutingModule } from './career-jobs-routing.module';
import { AdminJobsComponent } from './admin-jobs/admin-jobs.component';
import { AlumniJobsComponent } from './alumni-jobs/alumni-jobs.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { AddJobComponent } from './add-job/add-job.component';
import { JobTypesComponent } from './job-types/job-types.component';
import { AddEditJobTypeComponent } from './add-edit-job-type/add-edit-job-type.component';
import { ViewJobTypeComponent } from './view-job-type/view-job-type.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModule } from '../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AdminJobsComponent,
    AlumniJobsComponent,
    AddJobComponent,
    ViewJobComponent,
    JobTypesComponent,
    AddEditJobTypeComponent,
    ViewJobTypeComponent
  ],
  imports: [
    CommonModule,
    CareerJobsRoutingModule,
    EditorModule,

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
    MatRadioModule,
    MatTooltipModule,
    SharedModule
  ]
})
export class CareerJobsModule { }
