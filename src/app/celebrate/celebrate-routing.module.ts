import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { JourneyComponent } from './journey/journey.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PassionComponent } from './passion/passion.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';

import { YoutubeLinksComponent } from './youtube-links/youtube-links.component';
import { CreateFeaturedAlumniComponent } from './create-featured-alumni/create-featured-alumni.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { ViewFeaturedAlumniComponent } from './view-featured-alumni/view-featured-alumni.component';

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
        path: 'achievements',
        component: AchievementsComponent
      },
      {
        path: 'passion',
        component: PassionComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'youtube-links',
        component: YoutubeLinksComponent
      },
      {
        path: 'magazine',
        component: MagazineComponent
      },
      {
        path: 'news-and-updates',
        component: NewsAndUpdatesComponent
      },
      {
        path: 'add-news',
        component: AddEditNewsComponent
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
