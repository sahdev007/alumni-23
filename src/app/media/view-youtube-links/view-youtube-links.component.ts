import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-view-youtube-links',
  templateUrl: './view-youtube-links.component.html',
  styleUrls: ['./view-youtube-links.component.scss']
})
export class ViewYoutubeLinksComponent implements OnInit {
  youtubeId: number;
  youtubeData: any;
  loading: boolean;
  pageType: any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService) { 
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.youtubeId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.youtubeId) this.getAllData();
  }
/**
 * Function to get single Offer Expertise by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-youtube';
      await this.celebrateService.getDataById(action, this.youtubeId).subscribe((res:any) => {
        console.log(res);
        this.youtubeData = res?.data;
        this.loading = false;
      }); 
  }

}
