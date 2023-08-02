import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-club',
  templateUrl: './view-club.component.html',
  styleUrls: ['./view-club.component.scss']
})
export class ViewClubComponent implements OnInit {
  imgPath: any;
  constructor(
    public dialogRef: MatDialogRef<ViewClubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.imgPath = environment?.imgUrl;
  }

  ngOnInit(): void {

  }

}
