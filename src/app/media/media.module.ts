import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { AddEditGalleryComponent } from './add-edit-gallery/add-edit-gallery.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { ViewMagazineComponent } from './view-magazine/view-magazine.component';
import { AddEditMagazineComponent } from './add-edit-magazine/add-edit-magazine.component';
import { YoutubeLinksComponent } from './youtube-links/youtube-links.component';
import { AddEditYoutubeLinksComponent } from './add-edit-youtube-links/add-edit-youtube-links.component';
import { ViewYoutubeLinksComponent } from './view-youtube-links/view-youtube-links.component';
import { NewsAndUpdatesComponent } from './news-and-updates/news-and-updates.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
import { ViewNewsAndUpdatesComponent } from './view-news-and-updates/view-news-and-updates.component';
import { GalleryTypeComponent } from './gallery-type/gallery-type.component';
import { AddEditGalleryTypeComponent } from './add-edit-gallery-type/add-edit-gallery-type.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    GalleryComponent,
    AddEditGalleryComponent,
    ViewGalleryComponent,
    MagazineComponent,
    ViewMagazineComponent,
    AddEditMagazineComponent,
    YoutubeLinksComponent,
    AddEditYoutubeLinksComponent,
    ViewYoutubeLinksComponent,
    NewsAndUpdatesComponent,
    AddEditNewsComponent,
    ViewNewsAndUpdatesComponent,
    GalleryTypeComponent,
    AddEditGalleryTypeComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    EditorModule,

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
    MatRadioModule,
    MatTooltipModule,
    SharedModule,
    DragDropModule
  ]
})
export class MediaModule { }
