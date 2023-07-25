import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-magazine',
  templateUrl: './view-magazine.component.html',
  styleUrls: ['./view-magazine.component.scss']
})
export class ViewMagazineComponent implements OnInit {
  imgPath: any;

  constructor(
    public dialogRef: MatDialogRef<ViewMagazineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 
      this.imgPath = environment.imgUrl;
    }

  ngOnInit(): void {
    console.log(this.data);
  }

}
