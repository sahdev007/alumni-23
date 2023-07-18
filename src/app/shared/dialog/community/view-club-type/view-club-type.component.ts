import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-club-type',
  templateUrl: './view-club-type.component.html',
  styleUrls: ['./view-club-type.component.scss']
})
export class ViewClubTypeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewClubTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
