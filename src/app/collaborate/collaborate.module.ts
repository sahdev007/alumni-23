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
import { ParticipateInAdmissionPanelComponent } from './participate-in-admission-panel/participate-in-admission-panel.component';
import { OfferExpertiseComponent } from './offer-expertise/offer-expertise.component';
import { ShareOpportunitiesComponent } from './share-opportunities/share-opportunities.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewSpecialProjectComponent } from './view-special-project/view-special-project.component';
import { AddEditSpecialProjectComponent } from './add-edit-special-project/add-edit-special-project.component';
import { MatRadioModule } from '@angular/material/radio';
import { ViewAdmissionPanelComponent } from './view-admission-panel/view-admission-panel.component';
import { AddEditAdmissionPanelComponent } from './add-edit-admission-panel/add-edit-admission-panel.component';
import { AddEditShareOpportunityComponent } from './add-edit-share-opportunity/add-edit-share-opportunity.component';
import { ViewOfferExpertiseComponent } from './view-offer-expertise/view-offer-expertise.component';
import { ViewShareOpportunitiesComponent } from './view-share-opportunities/view-share-opportunities.component';


@NgModule({
  declarations: [
    SpecialProjectsComponent,
    ParticipateInAdmissionPanelComponent,
    OfferExpertiseComponent,
    ShareOpportunitiesComponent,
    ViewSpecialProjectComponent,
    AddEditSpecialProjectComponent,
    ViewAdmissionPanelComponent,
    AddEditAdmissionPanelComponent,
    AddEditShareOpportunityComponent,
    ViewOfferExpertiseComponent,
    ViewShareOpportunitiesComponent
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
    MatRadioModule,
    MatTooltipModule,
    SharedModule,
  ]
})
export class CollaborateModule { }
