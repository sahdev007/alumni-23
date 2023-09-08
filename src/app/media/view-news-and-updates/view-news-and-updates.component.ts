import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-news-and-updates',
  templateUrl: './view-news-and-updates.component.html',
  styleUrls: ['./view-news-and-updates.component.scss']
})
export class ViewNewsAndUpdatesComponent implements OnInit {

  newsId: number;
  newsData: any;
  loading: boolean;
  pageType: any;
  imgPath: any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService) { 
      this.imgPath = environment?.imgUrl;
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.newsId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.newsId) this.getAllData();
  }
/**
 * Function to get single Offer Expertise by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-news';
      await this.celebrateService.getDataById(action, this.newsId).subscribe((res:any) => {
        console.log(res);
        this.newsData = res?.data;
        this.loading = false;
      }); 
  }


}
