import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-edit-business-ventures',
  templateUrl: './edit-business-ventures.component.html',
  styleUrls: ['./edit-business-ventures.component.scss']
})
export class EditBusinessVenturesComponent implements OnInit {

  @ViewChild("stepper", { static: false }) stepper: MatStepper;

  editEntreprenForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  userId: any;
  userData: any;
  selectedStatus: any;
  loading: boolean;
  submitted: boolean = false;
  getBatch: any;
  companyLogo: any;
  logo: any;

  constructor(public loaction: Location, public fb: FormBuilder,
     public communityService: CommunityService, public aroute: ActivatedRoute,
      public router: Router, private notify: TokenInterceptor) {
    // Get Id by queryparams
      this.aroute.queryParams.subscribe((params: any) => {
        this.userId = params?.userId;

      }
    );
  }

  async ngOnInit() {
    this.loading = true;

    // this.buildForm();
    this.buildFirtGroup();
    this.buildSecondGroup();
    this.buildThirdForm();
    this.getAllBatches();

    let action  = 'single-entrepreneur';
    // setTimeout( async() => {
      await this.communityService.getDataById(action, this.userId).pipe(
        map((x:any) => {
          return x?.data?.filter((z: any) => {return z})
        })
      ).subscribe((res:any) => {
        this.userData = res[0];
        console.log(this.userData[0])
          // Patch values to Form
          this.firstFormGroup.patchValue({
            ...this.userData
          })
          this.secondFormGroup.patchValue({
            ...this.userData
          })
          this.thirdFormGroup.patchValue({
            ...this.userData
          })
          // this.editEntreprenForm.patchValue({
          //   ...this.userData
          // });
          this.loading = false;
      }, error => {
        this.loading = false;
      });  
  }


  buildFirtGroup() {
    this.firstFormGroup = this.fb.group({
      id: [''],
      company:['', Validators.required],
      owner:[''],
      course:[''],
      batchYear_id:['', Validators.required],
      contact:['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      email:['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      type:[''],
      date_founded:['']
    });
  }
  buildSecondGroup() {
    this.secondFormGroup = this.fb.group({
      industry:[''],
      customer:['',Validators.required],
      address:['',Validators.required],
      country:[''],
      state:[''],
      city:[''],
      funding: [''],
      internship:[false],
      website:['', Validators.required],
      facebook:['']
    });
  }
  buildThirdForm() {
    this.thirdFormGroup = this.fb.group({
      linkedin:[''],
      hours:[''],
      description:['', Validators.required],
      international_operations:[''],
      employee_no:[''],
      locations:[''],
      hiring:[false],
      placement:[false],
      company_logo: [''],
      status: ['']
    });
  }
 get f() { return this.editEntreprenForm.controls;}
 get fg() {return this.firstFormGroup.controls;}
 get sg() {return this.secondFormGroup.controls;}
 get tg() {return this.thirdFormGroup.controls;}

  /**
   * Function to navigate Back Page
   */
  navigateBack() {
    // this.loaction.back();
  }

  formStatus(value: any){
    if(value.invalid){
      return;
    } else {
      this.stepper.next();
    }

  }

  async getAllBatches() {
    let action: string = "all-batch"
    await this.communityService.getAllData(action).subscribe(
      (res: any) => {
        this.getBatch = res?.BatchYear;
      }, error => {
        // this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

    /**
   * Function to Upload File
   * @param event 
   */
    onUploadImage(event: any) {
      this.companyLogo = event.target.files[0];
      if (event?.target?.files && event?.target?.files[0]) {
        this.companyLogo = event?.target?.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
          this.logo = _event.target?.result;
        };
      }
    }
  
    
  /**
   * Function to update entrepreneur By Id
   */
  async update() {
    // let action: string = 'update-entrepreneur';
    let action = {
      action: 'update-entrepreneur',
      id: this.userId 
    }
    let params = {
      ...this.firstFormGroup?.value, ...this.secondFormGroup?.value, ...this.thirdFormGroup?.value
    }

    this.submitted = true;
    if(this.firstFormGroup.invalid && this.secondFormGroup.invalid && this.thirdFormGroup.invalid) {
      return;
    } else {
      let formData = new FormData();

      formData.append('company_logo', (this.companyLogo) ? this.companyLogo : '' );
      formData.append('company', this.firstFormGroup?.value?.company);
      formData.append('owner', this.firstFormGroup?.value?.owner);
      formData.append('course', this.firstFormGroup?.value?.course);
      formData.append('batchYear_id', this.firstFormGroup?.value?.batchYear_id);
      formData.append('email', this.firstFormGroup?.value?.email);
      formData.append('type', this.firstFormGroup?.value?.type);
      formData.append('date_founded', this.firstFormGroup?.value?.date_founded);
      formData.append('industry', this.secondFormGroup?.value?.industry);
      formData.append('customer', this.secondFormGroup?.value?.customer);
      formData.append('address', this.secondFormGroup?.value?.address);
      formData.append('country', this.secondFormGroup?.value?.country);
      formData.append('state', this.secondFormGroup?.value?.state);
      formData.append('city', this.secondFormGroup?.value?.city);
      formData.append('funding', this.secondFormGroup?.value?.funding);
      formData.append('internship', this.secondFormGroup?.value?.internship);
      formData.append('website', this.secondFormGroup?.value?.website);
      formData.append('facebook', this.secondFormGroup?.value?.facebook);
      formData.append('linkedin', this.thirdFormGroup?.value?.linkedin);
      formData.append('hours', this.thirdFormGroup?.value?.hours);
      formData.append('description', this.thirdFormGroup?.value?.description);
      formData.append('international_operations', this.thirdFormGroup?.value?.international_operations);
      formData.append('employee_no', this.thirdFormGroup?.value?.employee_no);
      formData.append('locations', this.thirdFormGroup?.value?.locations);
      formData.append('hiring', this.thirdFormGroup?.value?.hiring);
      formData.append('placement', this.thirdFormGroup?.value?.placement);
      formData.append('status', this.thirdFormGroup?.value?.status);

      await this.communityService.postData(action, formData).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notify.notificationService.success(res?.message);
          this.router.navigate(['/community/business-ventures'])
        }
      },
      error => {
        this.notify.notificationService.error(error);
      });
    }
  }

  /**
   * Function to change Funding Status
   * @param item 
   */
  onChange(item: any) {
    this.selectedStatus = item;
  }

}
