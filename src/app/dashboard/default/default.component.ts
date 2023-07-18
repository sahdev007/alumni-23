import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  totalAnalyticsCount = [];

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    $.getScript("./assets/js/deafult-dashboard.js");
    this.getAnalyticsNumbers();
  }
  /**
    * Get count of all registerd users
    */
  async getAnalyticsNumbers() {
    let action: any = 'all-counts'
    await this.commonService.getAllCount(action).subscribe((res: any) => {
      var countAll = res?.data;
      var icon;
      countAll.forEach((element1: any) => {
        switch (element1?.name) {
          case 'Registered Users':
            icon = 'bx-group';
            break;
          case 'News':
            icon = 'bx-news';
            break;
          case 'Events':
            icon = 'bx-calendar-event';
            break;
          case 'Jobs & Internships':
            icon = 'bxs-search';
            break;
          case 'Club':
            icon = 'bxs-wine';
            break;
          case 'Pending Request':
            icon = 'bx-git-pull-request';
            break;
        }
        var dtParm = {
          value: element1?.value,
          name: element1?.name,
          icon: icon
        };
        this.totalAnalyticsCount.push(dtParm);
      });

    });
  }
}
