import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrateRoutingModule } from './celebrate-routing.module';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { JourneyComponent } from './journey/journey.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PassionComponent } from './passion/passion.component';

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
import { CreateFeaturedAlumniComponent } from './create-featured-alumni/create-featured-alumni.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { BirthdayComponent } from './birthday/birthday.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ViewFeaturedAlumniComponent } from './view-featured-alumni/view-featured-alumni.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddEditJourneyComponent } from './add-edit-journey/add-edit-journey.component';

@NgModule({
  declarations: [
    FeaturedAlumniComponent,
    JourneyComponent,
    AchievementsComponent,
    PassionComponent,
    CreateFeaturedAlumniComponent,
    BirthdayComponent,
    AnniversaryComponent,
    ViewFeaturedAlumniComponent,
    AddEditJourneyComponent,
  ],
  imports: [
    CommonModule,
    CelebrateRoutingModule,
    EditorModule,
    NgxStarRatingModule,
    
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
    SharedModule,
    MatTooltipModule,
    MatFormFieldModule
  ]
})
export class CelebrateModule { }
