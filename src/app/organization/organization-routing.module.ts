import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { AddEditBatchesComponent } from './add-edit-batches/add-edit-batches.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { AddEditInstituteComponent } from './add-edit-institute/add-edit-institute.component';
import { AddEditPrimaryFunctionComponent } from './add-edit-primary-function/add-edit-primary-function.component';
import { AddEditSecondaryFunctionComponent } from './add-edit-secondary-function/add-edit-secondary-function.component';
import { AddEditSecondaryIndustryComponent } from './add-edit-secondary-industry/add-edit-secondary-industry.component';
import { AddEditPrimaryIndustryComponent } from './add-edit-primary-industry/add-edit-primary-industry.component';
import { AddEditSecurityQuestionsComponent } from './add-edit-security-questions/add-edit-security-questions.component';
import { AddEditSkillsComponent } from './add-edit-skills/add-edit-skills.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'institutes',
        component: InstituteComponent
      },
      {
        path: 'add-edit-institute',
        component: AddEditInstituteComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'add-edit-skill',
        component: AddEditSkillsComponent
      },
      {
        path: 'batch',
        component: BatchesComponent
      },
      {
        path: 'add-edit-batches',
        component: AddEditBatchesComponent
      },
      {
        path: 'under-graduate',
        component: UnderGraduateComponent
      },
      {
        path: 'post-graduate',
        component: PostGraduateComponent
      },
      {
        path: 'phd',
        component: PhdComponent
      },
      {
        path: 'add-edit-course',
        component: AddEditCourseComponent
      },
      {
        path: 'primary-industry',
        component: PrimaryIndustryComponent
      },
      {
        path: 'add-edit-primary-industry',
        component: AddEditPrimaryIndustryComponent
      },
      {
        path: 'secondary-industry',
        component: SecondaryIndustryComponent
      },
      {
        path: 'add-edit-secondary-industry',
        component: AddEditSecondaryIndustryComponent
      },
      {
        path: 'primary-function',
        component: PrimaryFunctionComponent
      },
      {
        path: 'add-edit-primary-function',
        component: AddEditPrimaryFunctionComponent
      },
      {
        path: 'secondary-function',
        component: SecondaryFunctionComponent
      },
      {
        path: 'add-edit-secondary-function',
        component: AddEditSecondaryFunctionComponent
      },
      {
        path: 'security-questions',
        component: SecurityQuestionsComponent
      },
      {
        path: 'add-edit-security-questions',
        component: AddEditSecurityQuestionsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
