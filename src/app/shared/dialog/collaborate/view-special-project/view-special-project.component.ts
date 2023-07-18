import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-special-project',
  templateUrl: './view-special-project.component.html',
  styleUrls: ['./view-special-project.component.scss']
})
export class ViewSpecialProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewSpecialProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
