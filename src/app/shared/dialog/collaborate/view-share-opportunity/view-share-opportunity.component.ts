import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-share-opportunity',
  templateUrl: './view-share-opportunity.component.html',
  styleUrls: ['./view-share-opportunity.component.scss']
})
export class ViewShareOpportunityComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewShareOpportunityComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

}
