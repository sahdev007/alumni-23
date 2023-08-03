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

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'institutes',
        component: InstituteComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'batch',
        component: BatchesComponent
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
        path: 'primary-industry',
        component: PrimaryIndustryComponent
      },
      {
        path: 'secondary-industry',
        component: SecondaryIndustryComponent
      },
      {
        path: 'primary-function',
        component: PrimaryFunctionComponent
      },
      {
        path: 'secondary-function',
        component: SecondaryFunctionComponent
      },
      {
        path: 'security-questions',
        component: SecurityQuestionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
