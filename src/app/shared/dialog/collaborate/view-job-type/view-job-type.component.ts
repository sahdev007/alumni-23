import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-job-type',
  templateUrl: './view-job-type.component.html',
  styleUrls: ['./view-job-type.component.scss']
})
export class ViewJobTypeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewJobTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
