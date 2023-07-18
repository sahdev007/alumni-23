import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-admission-panel',
  templateUrl: './view-admission-panel.component.html',
  styleUrls: ['./view-admission-panel.component.scss']
})
export class ViewAdmissionPanelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewAdmissionPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
