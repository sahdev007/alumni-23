import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
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
  loading: boolean = false;
  submitted: boolean = false;
  getBatch: any;

  constructor(public loaction: Location, public fb: FormBuilder,
     public communityService: CommunityService, public aroute: ActivatedRoute, public router: Router) {
    // Get Id by queryparams
      this.aroute.queryParams.subscribe((params: any) => {
        this.userId = params?.userId;
      }
    );
  }

  async ngOnInit() {

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
      is_active:['active'],
      status: ['unapproved']
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
   * Function to update entrepreneur By Id
   */
  async update() {
    let action: string = 'update-entrepreneur';
    let params = {
      ...this.firstFormGroup?.value, ...this.secondFormGroup?.value, ...this.thirdFormGroup?.value
    }
    this.submitted = true;
    if(this.firstFormGroup.invalid && this.secondFormGroup.invalid && this.thirdFormGroup.invalid) {
      return;
    } else {
      await this.communityService.updateData(action, params).subscribe((res: any) => {
        if(res?.status == 200) {
          // this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.router.navigate(['/community/business-ventures'])
        }
      },
      error => {
        console.log(error);
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
