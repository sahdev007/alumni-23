import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.component.html',
  styleUrls: ['./view-gallery.component.scss']
})
export class ViewGalleryComponent implements OnInit {

  galleryId: number;
  galleryData: any;
  loading: boolean;
  pageType: any;
  imgPath: any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService) { 
    this.imgPath = environment?.imgUrl;
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.galleryId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.galleryId) this.getAllData();
  }
/**
 * Function to get single Offer Expertise by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-gallery';
      await this.celebrateService.getDataById(action, this.galleryId).subscribe((res:any) => {
        console.log(res);
        this.galleryData = res?.data;
        this.loading = false;
      }); 
  }
}
