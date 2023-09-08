import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsListComponent } from './donations-list/donations-list.component';
import { SharedModule } from '../shared/shared.module';
import { donationsRoutingModule } from './donations-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddEditDonationComponent } from './add-edit-donation/add-edit-donation.component';
import { ViewDonationComponent } from './view-donation/view-donation.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UploadDonationImagesComponent } from './upload-donation-images/upload-donation-images.component';
import { DonationsCategoryComponent } from './donations-category/donations-category.component';
import { AddEditDonationsCategoryComponent } from './add-edit-donations-category/add-edit-donations-category.component';



@NgModule({
  declarations: [DonationsListComponent, AddEditDonationComponent, ViewDonationComponent, UploadDonationImagesComponent, DonationsCategoryComponent, AddEditDonationsCategoryComponent],
  imports: [
    CommonModule,
    SharedModule,
    donationsRoutingModule,
    
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
    MatRadioModule,
    MatTooltipModule,
    MatFormFieldModule,
    EditorModule
  ]
})
export class DonationsModule { }
