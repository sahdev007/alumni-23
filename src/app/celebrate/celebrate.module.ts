import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrateRoutingModule } from './celebrate-routing.module';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { JourneyComponent } from './journey/journey.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PassionComponent } from './passion/passion.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';
import { BirthayAnniversaryComponent } from './birthay-anniversary/birthay-anniversary.component';

import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { YoutubeLinksComponent } from './youtube-links/youtube-links.component';
import { CreateFeaturedAlumniComponent } from './create-featured-alumni/create-featured-alumni.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    FeaturedAlumniComponent,
    JourneyComponent,
    AchievementsComponent,
    PassionComponent,
    GalleryComponent,
    MagazineComponent,
    NewsAndUpdatesComponent,

    BirthayAnniversaryComponent,
    YoutubeLinksComponent,
    CreateFeaturedAlumniComponent,
    AddEditNewsComponent,


    YoutubeLinksComponent,
    CreateFeaturedAlumniComponent,
    AddEditNewsComponent,

    BirthayAnniversaryComponent


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
    MatInputModule,
    MatSelectModule,
    SharedModule
  ]
})
export class CelebrateModule { }
