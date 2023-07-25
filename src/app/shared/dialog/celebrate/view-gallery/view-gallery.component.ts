import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.scss']
})
export class ViewGalleryComponent implements OnInit {
  imgPath: any;

  constructor(
    public dialogRef: MatDialogRef<ViewGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.imgPath = environment.imgUrl;
     }

  ngOnInit(): void {
    console.log(this.data);
  }

}
