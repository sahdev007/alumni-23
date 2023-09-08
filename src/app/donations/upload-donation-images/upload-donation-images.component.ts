import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonationsService } from 'src/app/services/donations.service';

@Component({
  selector: 'app-upload-donation-images',
  templateUrl: './upload-donation-images.component.html',
  styleUrls: ['./upload-donation-images.component.scss']
})
export class UploadDonationImagesComponent implements OnInit {
  @Input() user_id: any;
  imagesForm: FormGroup;
  allFiles: Array<any> = [];
  allImages: any;

  constructor(public fb:FormBuilder, 
    private donationService: DonationsService) { }

  ngOnInit(): void {
    this.buildForm();
    this.getAllImages();
  }

  buildForm() {
    this.imagesForm = this.fb.group({
      id:[""],
      user_id: [this.user_id],
      images: [""]
    });
  }

  getFileDetails (e) {
    console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.allFiles.push(e.target.files[i]);
    }
  }

  /**
   * Function to upload file onclick
   */
  async uploadFiles () {
    this.imagesForm.get("images").setValue(this.allFiles);
    console.log(this.imagesForm?.value)
    let formData = new FormData();
    formData.append("user_id", this.imagesForm?.value?.user_id);
    formData.append("images", this.imagesForm?.value?.images);

    let action: string = "create-donationImages";
    await this.donationService.postData(action, formData).subscribe((res: any) => {
      console.log(res);
    });
  }

  /**
   * Function to remove item by their index
   * @param i 
   */
  removeItems(i:any) {
    this.allFiles.splice(i, 1);
  }

  /**
   * Function to get all images
   */
  async getAllImages() {
    let action: string = "all-donationImages";
    await this.donationService.getAllData(action).subscribe((res:any) => {
      console.log(res)
      if(res?.status == 200) {
        this.allImages = res.Donation;
      }
    })
  }
}
