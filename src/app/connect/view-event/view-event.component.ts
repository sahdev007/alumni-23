import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  loading: boolean;
  eventId: any;
  eventData : any;
  imgPath: any;
  pageType: any;
  constructor(private arouter: ActivatedRoute, private communityServie : CommunityService) { 
    this.imgPath = environment?.imgUrl;
  }

  async ngOnInit() {
    this.loading = true;
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.type;
      this.eventId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.eventId) {
        let action: string = "single-event";
        await this.communityServie.getDataById(action, this.eventId).subscribe((x: any) => {
            this.eventData = x?.data;
            this.loading = false;
        });
    }
  }

}
