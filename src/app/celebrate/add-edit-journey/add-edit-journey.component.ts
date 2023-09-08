import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-journey',
  templateUrl: './add-edit-journey.component.html',
  styleUrls: ['./add-edit-journey.component.scss']
})
export class AddEditJourneyComponent implements OnInit {
  journeyData: any;
  loading: boolean;
  pageType: any;
  journeyForm: FormGroup;
  journeyId: any;
  currentUser: any;
  submitted: boolean;
  status: any;
  author:any;
  type: any;
  allInstitutes: any;
  celPic: any;
  img: string | ArrayBuffer;
  
  constructor(public aroute: ActivatedRoute, private celebrateService: CelebrateService, 
    private fb: FormBuilder, public notifyService: TokenInterceptor, public router: Router, private config : Config) { 
      this.status = this.config.status;
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }

      // Get Id by queryparams
      this.aroute.queryParams.subscribe((params: any) => {
        this.journeyId = params?.id;
        this.pageType = params?.action,
        this.type = params?.type
      });
  }

  async ngOnInit() {
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;

    this.buildForm();
    this.getAllInstitutes();
    if(this.journeyId) this.getSingleAdmission();
  }
/**
 * Function to get single Admission panel by id
 */
  async getSingleAdmission() {
    this.loading = true;
    let action  = 'single-journey';
      await this.celebrateService.getDataById(action, this.journeyId).subscribe((res:any) => {
        console.log(res);
        this.journeyData = res?.data[0];
        this.journeyForm.patchValue({...this.journeyData});
        this.loading = false;
      }); 
  }

  buildForm() {
    this.journeyForm = this.fb.group({
      id: [""],
      user_id: [this.currentUser.id],
      title: ['', Validators.required],
      institute_id: ['', Validators.required],
      type: [this.type],
      description: ['', Validators.required],
      status:["", Validators.required],
      photo: [""]
    })
  }

  async save() {
    this.submitted = true;
    if (this.journeyForm.invalid) {
      return;
    } else {
      let action = {
        action: this.pageType,
        id: this.pageType == 'update-journey' ? parseInt(this.journeyId) : ''
      }

      const formData: FormData = new FormData();
      formData.append('photo', (this.celPic) ?  this.celPic: '');
      formData.append('user_id', this.journeyForm?.value?.user_id);
      formData.append('title', this.journeyForm?.value?.title);
      formData.append('type', this.journeyForm?.value?.type);
      formData.append('institute_id', this.journeyForm?.value?.institute_id);
      formData.append('description', this.journeyForm?.value?.description);
      formData.append('status', this.journeyForm?.value?.status);
  
      await this.celebrateService.postData(action, formData).subscribe((res: any) => {
        if (res?.status === 200) {
          this.notifyService.notificationService.success(res?.message);
          if(this.type=="journey") {
            this.router.navigate(['/celebrate/journey']);
          } else if(this.type=="achivement"){
            this.router.navigate(['/celebrate/achievements']);
          } else if(this.type=="passion"){
            this.router.navigate(['/celebrate/passion']);
          }
        }
      }, error => {
        this.notifyService.notificationService.error(error);
      });
    }
  }

  onUploadImg(event: any) {
    this.celPic = event?.target?.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.celPic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event?.target?.files[0]);
      reader.onload = (_event) => {
        this.img = _event?.target?.result;
      }
    }
  }

  async getAllInstitutes() {
    let action: string = "all-institute"
    await this.celebrateService.getAllData(action).subscribe(
      (res: any) => {
        this.allInstitutes = res?.Institute;
      },
      (error) => {
      }
    );
  }
}
// add-edit-journey