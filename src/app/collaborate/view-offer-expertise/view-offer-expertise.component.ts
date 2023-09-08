import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-offer-expertise',
  templateUrl: './view-offer-expertise.component.html',
  styleUrls: ['./view-offer-expertise.component.scss']
})
export class ViewOfferExpertiseComponent implements OnInit {

  expertiseId: number;
  expertiseData: any;
  loading: boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.expertiseId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.expertiseId) this.getAllData();
  }
/**
 * Function to get single Offer Expertise by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-expertise';
      await this.collaborateService.getDataById(action, this.expertiseId).subscribe((res:any) => {
        console.log(res);
        this.expertiseData = res?.data;
        this.loading = false;
      }); 
  }
}
