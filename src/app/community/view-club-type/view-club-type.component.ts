import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-view-club-type',
  templateUrl: './view-club-type.component.html',
  styleUrls: ['./view-club-type.component.scss']
})
export class ViewClubTypeComponent implements OnInit {
  pageType: any;
  clubId: any;
  clubData: any;
  loading: boolean;

  constructor(public arouter: ActivatedRoute, private communityServie: CommunityService) { }

  async ngOnInit() {
    this.loading = true;
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.clubId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.clubId) {
        let action: string = "single-clubType";
        await this.communityServie.getDataById(action, this.clubId).subscribe((x: any) => {
          this.clubData = x?.data;
          this.loading = false;
        });
    }
  }

}
