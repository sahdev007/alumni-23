import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { BusinessVenturesComponent } from './business-ventures/business-ventures.component';
import { InviteBatchmatesComponent } from './invite-batchmates/invite-batchmates.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AddClubsComponent } from './add-clubs/add-clubs.component';
import { AddClubTypeComponent } from './add-club-type/add-club-type.component';

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
import { EditBusinessVenturesComponent } from './edit-business-ventures/edit-business-ventures.component';
import { MatStepperModule } from '@angular/material/stepper';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ViewBusinessVenturesComponent } from './view-business-ventures/view-business-ventures.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    BusinessVenturesComponent,
    InviteBatchmatesComponent,
    ClubsComponent,
    AddClubsComponent,
    AddClubTypeComponent,
    EditBusinessVenturesComponent,
    ViewBusinessVenturesComponent,
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,

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
    MatStepperModule,
    MatTooltipModule,
    MatFormFieldModule,

    EditorModule,
    SharedModule,
  ]
})
export class CommunityModule { }
