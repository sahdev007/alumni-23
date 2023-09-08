import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollaborateService } from 'src/app/services/collaborate.service';

@Component({
  selector: 'app-view-special-project',
  templateUrl: './view-special-project.component.html',
  styleUrls: ['./view-special-project.component.scss']
})
export class ViewSpecialProjectComponent implements OnInit {
  projectId: number;
  projectData: any;
  loading: boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.projectId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    let action  = 'single-project';
      await this.collaborateService.getDataById(action, this.projectId).subscribe((res:any) => {
        this.projectData = res?.data[0];
        this.loading = false;
      });  
  }
}
