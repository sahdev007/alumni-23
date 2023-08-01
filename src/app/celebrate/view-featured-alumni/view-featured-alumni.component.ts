import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-view-featured-alumni',
  templateUrl: './view-featured-alumni.component.html',
  styleUrls: ['./view-featured-alumni.component.scss']
})
export class ViewFeaturedAlumniComponent implements OnInit {
  alumniId: number;
  alumniData: any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.alumniId = params?.userId;
        })
  }

  async ngOnInit() {
    let action  = 'single-getFeatured';
      await this.celebrateService.getDataById(action, this.alumniId).subscribe((res:any) => {
        this.alumniData = res?.data;
      });  
  }

}
