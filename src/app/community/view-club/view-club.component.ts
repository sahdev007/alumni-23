import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-view-club',
  templateUrl: './view-club.component.html',
  styleUrls: ['./view-club.component.scss']
})
export class ViewClubComponent implements OnInit {
  loading:boolean;
  clubId: any;
  clubData: any;
  constructor(public arouter: ActivatedRoute, private communityServie: CommunityService) { }

  async ngOnInit() {
    this.loading = true;
    this.arouter.queryParams.subscribe((res: any) => {
      this.clubId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.clubId) {
        let action: string = "single-club";
        await this.communityServie.getDataById(action, this.clubId).subscribe((x: any) => {
            this.clubData = x?.data[0];
            this.loading = false;
        });
    }
    
  }

}
