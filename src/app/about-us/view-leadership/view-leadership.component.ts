import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-leadership',
  templateUrl: './view-leadership.component.html',
  styleUrls: ['./view-leadership.component.scss']
})
export class ViewLeadershipComponent implements OnInit {
  pageType: any;
  teamId: any;
  teamDetail: any;
  imgPath: any;
  loading: boolean;

  constructor(public arouter: ActivatedRoute, public router: Router, private aboutService : AboutService) { 
     this.imgPath = environment?.imgUrl;
    }

 async ngOnInit() {
  this.loading = true;
   this.arouter.queryParams.subscribe((res: any) => {
     this.pageType = res?.action;
     this.teamId = res?.id;
   });
   /**Get and single team data and Patch with form */
   if(this.teamId) {
      let action: string = "single-team";
      await this.aboutService.getDataById(action, this.teamId).subscribe((x: any) => {
        setTimeout(() => {
          this.teamDetail = x?.data;
          this.loading = false;
        }, 500);
      });
   }
 }

}
