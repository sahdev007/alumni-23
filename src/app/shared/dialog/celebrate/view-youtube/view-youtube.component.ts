import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-youtube',
  templateUrl: './view-youtube.component.html',
  styleUrls: ['./view-youtube.component.scss']
})
export class ViewYoutubeComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewYoutubeComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
