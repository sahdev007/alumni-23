import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-business-ventures',
  templateUrl: './view-business-ventures.component.html',
  styleUrls: ['./view-business-ventures.component.scss']
})
export class ViewBusinessVenturesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewBusinessVenturesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
