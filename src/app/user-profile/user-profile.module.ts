import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserProfileComponent } from './user-profile.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { EmpBusinessInfoComponent } from './emp-business-info/emp-business-info.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ExperienceComponent } from './experience/experience.component';
import { OthersComponent } from './others/others.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    UserProfileComponent,
    BasicInfoComponent,
    EducationComponent,
    EmpBusinessInfoComponent,
    MentorshipComponent,
    ExperienceComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UserProfileRoutingModule,
    NgbModule,
    MatButtonModule,
    MatTooltipModule,

    NgxPaginationModule,
    MatProgressBarModule
  ]
})
export class UserProfileModule { }
