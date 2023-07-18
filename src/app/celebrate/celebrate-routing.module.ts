import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { JourneyComponent } from './journey/journey.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PassionComponent } from './passion/passion.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';

import { BirthayAnniversaryComponent } from './birthay-anniversary/birthay-anniversary.component';

import { YoutubeLinksComponent } from './youtube-links/youtube-links.component';
import { CreateFeaturedAlumniComponent } from './create-featured-alumni/create-featured-alumni.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'featured-alumni',
        component: FeaturedAlumniComponent,
        data: {
          title: 'featured alumni'
        }
      },
      {
        path: 'create-featured-alumni',
        component: CreateFeaturedAlumniComponent,
        data: {
          title: 'Get Featured'
        }
      },
      {
        path: 'journey',
        component: JourneyComponent,
        data: {
          title: 'Journey'
        }
      },
      {
        path: 'achievements',
        component: AchievementsComponent,
        data: {
          title: 'Achievements'
        }
      },
      {
        path: 'passion',
        component: PassionComponent,
        data: {
          title: 'Passion'
        }
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        data: {
          title: 'Gallery'
        }
      },
      {
        path: 'youtube-links',
        component: YoutubeLinksComponent,
        data: {
          title: 'Youtube links'
        }
      },
      {
        path: 'magazine',
        component: MagazineComponent,
        data: {
          title: 'Magazine'
        }
      },
      {
        path: 'news-and-updates',

        component: NewsAndUpdatesComponent,
        data: {
          title: 'News'
        }
      },
    
      {
        path: 'add-news',
        component: AddEditNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrateRoutingModule { }
