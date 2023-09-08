import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Config } from 'src/app/services/config';
import { DonationsService } from 'src/app/services/donations.service';

@Component({
  selector: 'app-add-edit-donations-category',
  templateUrl: './add-edit-donations-category.component.html',
  styleUrls: ['./add-edit-donations-category.component.scss']
})
export class AddEditDonationsCategoryComponent implements OnInit {
  form: FormGroup;
  status: any;
  currentUser: any;
  pageType: any;
  categoryId: any;
  loading : boolean;
  categoryData : any;
  submitted: boolean;
  donationType = [
    {id:1, type:'Self', status: "active"},
    {id:2, type:'Group', status: "active"},
    {id:3, type:'Other', status: "active"}
  ]

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
      this.categoryId = params?.id;

      //Get Single gallery data by Id
      if (this.categoryId) {
        this.loading = true;
        await this.donationService
          .getDataById("single-donationCategories", this.categoryId)
          .subscribe((res: any) => {
            console.log(res);
            this.categoryData = res?.data;
            this.form.patchValue({
              ...this.categoryData,
            });
            this.loading = false;
          });
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Build Form data
   */
  buildForm() {
    this.form = this.fb.group({
      id:[''],
      name:["" ,Validators.required],
      status: ['', Validators.required]
    });
  }

  /**
   * Function to Add/Edit donation
   * @returns 
   */
  async save() {
    this.submitted = true;
    if(this.form?.invalid){
      return;
    }
    else{
      let action: string = this.pageType == "create-donationCategories" ? 'create-donationCategories': 'update-donationCategories';
      await this.donationService.postData(action, this.form?.value).subscribe((item: any) => {
        if(item?.status == 200){
          this.notify.notificationService.success(item?.message);
          this.router.navigate(['/donations/donations-category']);
        }
      }, error => {
          this.notify.notificationService.error(error);
      });
    }
  }
}
