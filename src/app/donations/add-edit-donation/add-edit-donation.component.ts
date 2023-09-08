import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Config } from 'src/app/services/config';
import { DonationsService } from 'src/app/services/donations.service';

@Component({
  selector: 'app-add-edit-donation',
  templateUrl: './add-edit-donation.component.html',
  styleUrls: ['./add-edit-donation.component.scss']
})
export class AddEditDonationComponent implements OnInit {
  donationForm: FormGroup;
  status: any;
  currentUser: any;
  pageType: any;
  donationId: any;
  loading : boolean;
  donationData : any;
  submitted: boolean;
  donationType = [
    {id:1, type:'Self', status: "active"},
    {id:2, type:'Group', status: "active"},
    {id:3, type:'Other', status: "active"}
  ];
  donationCategory: Array<any> = [];

  constructor(
    public fb: FormBuilder,
    private donationService: DonationsService,
    public aroute: ActivatedRoute,
    public router: Router,
    private notify: TokenInterceptor,
    private config: Config
  ) {
    this.status = this.config.status;
    if (localStorage) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
    }
    // Get Id by queryparams
    this.aroute.queryParams.subscribe(async (params: any) => {
      this.pageType = params?.action;
      this.donationId = params?.id;

      //Get Single gallery data by Id
      if (this.donationId) {
        this.loading = true;
        await this.donationService
          .getDataById("single-donation", this.donationId)
          .subscribe((res: any) => {
            console.log(res);
            this.donationData = res?.data;
            this.donationForm.patchValue({
              ...this.donationData,
            });
            this.loading = false;
          });
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllCategory();
  }

  /**
   * Build Form data
   */
  buildForm() {
    this.donationForm = this.fb.group({
      id:[''],
      user_id: [this.currentUser?.id],
      donation_title: ['', Validators.required],
      donation_description: ['', Validators.required],
      donation_type: ['', Validators.required],
      donation_amount: ['', Validators.required],
      donation_target_amount: ['',Validators.required],
      donation_category_id: ['',Validators.required],
      donation_image_id: ['', Validators.required],
      order: [''],
      status: ['', Validators.required]
    });
  }

  /**
   * Function to Add/Edit donation
   * @returns 
   */
  async save() {
    this.submitted = true;
    if(this.donationForm.invalid) {
      return;
    } else{
      console.log(this.donationForm.value, this.pageType);
      await this.donationService.postData(this.pageType, this.donationForm.value).subscribe((item:any) => {
        if(item?.status == 200) this.notify.notificationService.success(item?.message); this.router.navigate(['/donations/donations-list']);
      },
      error => {
        this.notify.notificationService.error(error);
      })
    }
  }

  /**
   * Function to get all donation category
   */
  async getAllCategory() {
    let action : string = "all-donationCategories";
    await this.donationService.getAllData(action).subscribe((res: any) => {
      this.donationCategory = res?.Donation;
    })
  }
}
