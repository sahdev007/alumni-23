import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-admission-panel',
  templateUrl: './view-admission-panel.component.html',
  styleUrls: ['./view-admission-panel.component.scss']
})
export class ViewAdmissionPanelComponent implements OnInit {

  admissionId: number;
  pannelData: any;
  loading: boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.admissionId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.admissionId) this.getSingleAdmission();
  }
/**
 * Function to get single Admission panel by id
 */
  async getSingleAdmission() {
    this.loading = true;
    let action  = 'single-admission';
      await this.collaborateService.getDataById(action, this.admissionId).subscribe((res:any) => {
        console.log(res);
        this.pannelData = res?.data;
        this.loading = false;
      }); 
  }
}
