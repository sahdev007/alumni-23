import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-leadership',
  templateUrl: './view-leadership.component.html',
  styleUrls: ['./view-leadership.component.scss']
})
export class ViewLeadershipComponent implements OnInit {
  imgPath: any;

  constructor( 
    public dialogRef: MatDialogRef<ViewLeadershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 
      this.imgPath = environment.imgUrl;
    }

  ngOnInit(): void {
  }

}
