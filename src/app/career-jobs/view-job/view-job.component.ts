import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {

  jobId: number;
  jobsData: any;
  pageType: any;
  loading: boolean;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.jobId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    let action  = 'single-jobs';
      await this.celebrateService.getDataById(action, this.jobId).subscribe((res:any) => {
        this.jobsData = res?.data;
        this.loading = false;
      });  
  }
}
