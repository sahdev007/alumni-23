import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AddEditGalleryComponent } from './add-edit-gallery/add-edit-gallery.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ViewMagazineComponent } from './view-magazine/view-magazine.component';
import { AddEditMagazineComponent } from './add-edit-magazine/add-edit-magazine.component';
import { YoutubeLinksComponent } from './youtube-links/youtube-links.component';
import { ViewYoutubeLinksComponent } from './view-youtube-links/view-youtube-links.component';
import { AddEditYoutubeLinksComponent } from './add-edit-youtube-links/add-edit-youtube-links.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';
import { ViewNewsAndUpdatesComponent } from './view-news-and-updates/view-news-and-updates.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { GalleryTypeComponent } from './gallery-type/gallery-type.component';
import { AddEditGalleryTypeComponent } from './add-edit-gallery-type/add-edit-gallery-type.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'add-edit-gallery',
        component: AddEditGalleryComponent
      },
      {
        path: 'view-gallery',
        component: ViewGalleryComponent
      },
      {
        path: 'gallery-type',
        component: GalleryTypeComponent
      },
      {
        path: 'add-edit-gallery-type',
        component: AddEditGalleryTypeComponent
      },
      {
        path: 'magazine',
        component: MagazineComponent
      },
      {
        path: 'view-magazine',
        component: ViewMagazineComponent
      },
      {
        path: 'add-edit-magazine',
        component: AddEditMagazineComponent
      },
      {
        path: 'youtube-links',
        component: YoutubeLinksComponent
      },
      {
        path: 'view-youtube-links',
        component: ViewYoutubeLinksComponent
      },
      {
        path: 'add-edit-youtube-links',
        component: AddEditYoutubeLinksComponent
      },
      {
        path: 'news-and-updates',
        component: NewsAndUpdatesComponent
      },
      {
        path: 'view-news-and-updates',
        component: ViewNewsAndUpdatesComponent
      },
      {
        path: 'add-news',
        component: AddEditNewsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
