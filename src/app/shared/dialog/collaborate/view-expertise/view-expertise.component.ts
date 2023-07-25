import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-expertise',
  templateUrl: './view-expertise.component.html',
  styleUrls: ['./view-expertise.component.scss']
})
export class ViewExpertiseComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ViewExpertiseComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
