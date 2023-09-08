import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorshipRoutingModule } from './mentorship-routing.module';
import { MenteeComponent } from './mentee/mentee.component';
import { MentorComponent } from './mentor/mentor.component';
import { EditorModule } from '@tinymce/tinymce-angular';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MenteeComponent,
    MentorComponent
  ],
  imports: [
    CommonModule,
    MentorshipRoutingModule,
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
export class MentorshipModule { }
