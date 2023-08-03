import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
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
import { InstituteComponent } from './institute/institute.component';
import { SkillsComponent } from './skills/skills.component';
import { BatchesComponent } from './batches/batches.component';
import { UnderGraduateComponent } from './under-graduate/under-graduate.component';
import { PostGraduateComponent } from './post-graduate/post-graduate.component';
import { PhdComponent } from './phd/phd.component';
import { PrimaryIndustryComponent } from './primary-industry/primary-industry.component';
import { SecondaryIndustryComponent } from './secondary-industry/secondary-industry.component';
import { PrimaryFunctionComponent } from './primary-function/primary-function.component';
import { SecondaryFunctionComponent } from './secondary-function/secondary-function.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';

@NgModule({
  declarations: [
    InstituteComponent,
    SkillsComponent,
    BatchesComponent,
    UnderGraduateComponent,
    PostGraduateComponent,
    PhdComponent,
    PrimaryIndustryComponent,
    SecondaryIndustryComponent,
    PrimaryFunctionComponent,
    SecondaryFunctionComponent,
    SecurityQuestionsComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,

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
export class OrganizationModule { }
