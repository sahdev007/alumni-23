import { Component, OnInit } from '@angular/core';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  totalAnalyticsCount = [];
  newsData: any;
  imgPath:any;

  constructor(
    private commonService: CommonService,
    private celebrateService: CelebrateService
  ) { 
    this.imgPath = environment?.imgUrl;
  }

  ngOnInit(): void {
    $.getScript("./assets/js/deafult-dashboard.js");
    this.getAnalyticsNumbers();
    this.getAllNewsData();
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
/**
 * Function to Get all latest news
 */
  getAllNewsData(){
   this.celebrateService.getAllData('all-news').subscribe((x:any)=> {
    this.newsData = x.data.sort().reverse();;
   })
  }
}