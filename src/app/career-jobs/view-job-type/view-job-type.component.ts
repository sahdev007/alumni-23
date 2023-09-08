import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-job-type',
  templateUrl: './view-job-type.component.html',
  styleUrls: ['./view-job-type.component.scss']
})
export class ViewJobTypeComponent implements OnInit {

  jobId: number;
  jobsData: any;
  loading:boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.jobId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    let action  = 'single-jobType';
      await this.celebrateService.getDataById(action, this.jobId).subscribe((res:any) => {
        this.jobsData = res?.data;
        this.loading = false;
      });  
  }

}
