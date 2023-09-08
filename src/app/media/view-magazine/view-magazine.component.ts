import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-magazine',
  templateUrl: './view-magazine.component.html',
  styleUrls: ['./view-magazine.component.scss']
})
export class ViewMagazineComponent implements OnInit {

  magazineId: number;
  magazineData: any;
  loading: boolean;
  pageType: any;
  imgPath:any;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService) { 
    this.imgPath = environment?.imgUrl;
        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          this.magazineId = params?.id;
          this.pageType = params?.type
        })
  }

  async ngOnInit() {
    this.loading = true;
    if(this.magazineId) this.getAllData();
  }
/**
 * Function to get single Offer Expertise by id
 */
  async getAllData() {
    this.loading = true;
    let action  = 'single-magazine';
      await this.celebrateService.getDataById(action, this.magazineId).subscribe((res:any) => {
        console.log(res);
        this.magazineData = res?.data;
        this.loading = false;
      }); 
  }


}
