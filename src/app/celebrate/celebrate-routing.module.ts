import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { JourneyComponent } from './journey/journey.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PassionComponent } from './passion/passion.component';
import { CreateFeaturedAlumniComponent } from './create-featured-alumni/create-featured-alumni.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ViewFeaturedAlumniComponent } from './view-featured-alumni/view-featured-alumni.component';
import { AddEditJourneyComponent } from './add-edit-journey/add-edit-journey.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'featured-alumni',
        component: FeaturedAlumniComponent
      },
      {
        path: 'create-featured-alumni',
        component: CreateFeaturedAlumniComponent
      },
      {
        path: 'view-featured-alumni',
        component: ViewFeaturedAlumniComponent
      },
      {
        path: 'journey',
        component: JourneyComponent
      },
      {
        path: 'add-edit-journey',
        component: AddEditJourneyComponent
      },
      {
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: 'passion',
        component: PassionComponent
      },
      {
        path: 'birthday',
        component: BirthdayComponent
      },
      {
        path: 'anniversary',
        component: AnniversaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrateRoutingModule { }
