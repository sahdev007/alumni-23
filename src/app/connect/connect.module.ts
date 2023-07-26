import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { EventAtGlanceComponent } from './event-at-glance/event-at-glance.component';
import { EventTypesComponent } from './event-types/event-types.component';
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
import { AddEventComponent } from './add-event/add-event.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AlumniEventComponent } from './alumni-event/alumni-event.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    EventAtGlanceComponent,
    EventTypesComponent,
    AddEventComponent,
    AdminEventComponent,
    AlumniEventComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
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
    MatInputModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class ConnectModule { }
