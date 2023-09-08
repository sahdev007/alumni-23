import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-donation',
  templateUrl: './view-donation.component.html',
  styleUrls: ['./view-donation.component.scss']
})
export class ViewDonationComponent implements OnInit {

  loading: boolean;
  donationId: any;
  donationData: any;
  
  constructor(public aroute: ActivatedRoute, private contactService: DataService) { 
    // Get Id by queryparams
    this.aroute.queryParams.subscribe((params: any) => {
      this.donationId = params?.id;
    })
}

async ngOnInit() {
  this.loading = true;
  if(this.donationId) this.getAllData();
}
/**
* Function to get single Offer Expertise by id
*/
async getAllData() {
this.loading = true;
let action  = 'single-donation';
  await this.contactService.getDataById(action, this.donationId).subscribe((res:any) => {
    this.donationData = res?.data;
    this.loading = false;
  }); 
}


}
