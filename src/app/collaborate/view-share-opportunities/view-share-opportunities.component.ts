import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-share-opportunities',
  templateUrl: './view-share-opportunities.component.html',
  styleUrls: ['./view-share-opportunities.component.scss']
})
export class ViewShareOpportunitiesComponent implements OnInit {

  opportunitiesId: number;
  opportunitiesData: any;
  loading: boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.opportunitiesId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    if(this.opportunitiesId) this.getAllData();
  }
/**
 * Function to get single Share Opportunities by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-opportunity';
      await this.collaborateService.getDataById(action, this.opportunitiesId).subscribe((res:any) => {
        this.opportunitiesData = res?.data;
        this.loading = false;
      }); 
  }
}
