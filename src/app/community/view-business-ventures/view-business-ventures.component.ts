import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-business-ventures',
  templateUrl: './view-business-ventures.component.html',
  styleUrls: ['./view-business-ventures.component.scss']
})
export class ViewBusinessVenturesComponent implements OnInit {
  userId: number;

  constructor(public aroute: ActivatedRoute) {
    // Get Id by queryparams
    this.aroute.queryParams.subscribe((params: any) => {
      this.userId = params?.userId;
    })
  }

  ngOnInit(): void {
    console.log(this.userId);
  }

}
