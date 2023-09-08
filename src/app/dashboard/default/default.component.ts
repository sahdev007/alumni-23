import { Component, OnInit } from "@angular/core";
import { CelebrateService } from "src/app/services/celebrate.service";
import { CommonService } from "src/app/services/common.service";
import { environment } from "src/environments/environment";
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle} from '@angular/cdk/drag-drop';
import * as moment from "moment";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
})
export class DefaultComponent implements OnInit {
  totalAnalyticsCount = [];
  newsData: any;
  imgPath: any;
  currentUser: any;
  date: any;

  constructor(
    private commonService: CommonService,
    private celebrateService: CelebrateService
  ) {
    setInterval(() => {
      this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    }, 1000);
    this.imgPath = environment?.imgUrl;
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
  }

  ngOnInit(): void {
    $.getScript("./assets/js/deafult-dashboard.js");
    this.getAnalyticsNumbers();
    this.getAllNewsData();
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.totalAnalyticsCount, event.previousIndex, event.currentIndex);
  }
  
  /**
   * Get count of all registerd users
   */
  async getAnalyticsNumbers() {
    let action: any = "all-counts";
    this.totalAnalyticsCount = [
      { value: 8, img:"./assets/images/dashboard/user/registerdImg.png", icon: 'bx-group', url:"/dashboard/all-users", name: "Registered Users" },
      { value: 5, img:"./assets/images/dashboard/user/pendingImg.png", icon :'bx-user-check', url:"/dashboard/all-users", name: "Approved User" },
      { value: 1, img:"./assets/images/dashboard/user/pendingImg.png", icon :'bx-news', url:"/dashboard/manage-request", name: "Pending Request" },
      { value: 2, img:"./assets/images/dashboard/user/pendingImg.png", icon :'bx-news', url:"", name: "Rejected Request" },
      { value: 11, img:"./assets/images/dashboard/user/newsImg.png", icon :'bx-news', url:"/celebrate/news-and-updates", name: "News" },
      { value: 13, img:"./assets/images/dashboard/user/eventsImg.png", icon: 'bx-calendar-event', url:"/connect/admin-events", name: "Events" },
      { value: 52, img:"./assets/images/dashboard/user/jobsImg.png", icon: 'bxs-search', url:"/collaborate/admin-jobs", name: "Jobs & Internships" },
      { value: 46, img:"./assets/images/dashboard/user/clubsImg.png", icon: 'bxs-wine', url:"/community/clubs", name: "Club" }
    ];
    // await this.commonService.getAllCount(action).subscribe((res: any) => {
    //   var countAll = res?.data;
    //   var icon;
    //   countAll.forEach((element1: any) => {
    //     switch (element1?.name) {
    //       case 'Registered Users':
    //         icon = 'bx-group';
    //         break;
    //       case 'News':
    //         icon = 'bx-news';
    //         break;
    //       case 'Events':
    //         icon = 'bx-calendar-event';
    //         break;
    //       case 'Jobs & Internships':
    //         icon = 'bxs-search';
    //         break;
    //       case 'Club':
    //         icon = 'bxs-wine';
    //         break;
    //       case 'Pending Request':
    //         icon = 'bx-git-pull-request';
    //         break;
    //     }
    //     var dtParm = {
    //       value: element1?.value,
    //       name: element1?.name,
    //       icon: icon
    //     };
    //     this.totalAnalyticsCount.push(dtParm);
    //   });

    // });
  }
  /**
   * Function to Get all latest news
   */
  getAllNewsData() {
    this.celebrateService.getAllData("all-news").subscribe((x: any) => {
      this.newsData = x.data.sort().reverse();
    });
  }
}
