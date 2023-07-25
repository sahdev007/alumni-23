import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-featured-alumni',
  templateUrl: './view-featured-alumni.component.html',
  styleUrls: ['./view-featured-alumni.component.scss']
})
export class ViewFeaturedAlumniComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewFeaturedAlumniComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
