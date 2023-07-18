import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-news-updates',
  templateUrl: './view-news-updates.component.html',
  styleUrls: ['./view-news-updates.component.scss']
})
export class ViewNewsUpdatesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewNewsUpdatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
