import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-club',
  templateUrl: './view-club.component.html',
  styleUrls: ['./view-club.component.scss']
})
export class ViewClubComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewClubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
