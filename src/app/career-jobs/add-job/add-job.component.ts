import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  jobForm: FormGroup;
  
  status: any;
  profilePic: any;
  image: any;
  loading: boolean = false;
  currentUser: any;
  author: any;
  submitted: boolean = false;
  jobType: any;
  internshipData: any;
  newJobId: any;
  updatedJob: any;
  jobStat: any;

  constructor(
    public fb : FormBuilder,
    public collaborateService: CollaborateService,
    public router: Router,
    public arouter: ActivatedRoute,
    private notify : TokenInterceptor,
    private config: Config
  ) { 
    this.jobStat = this.config?.isOpen;
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.buildForm();
   this.getAllJobTypes();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;

    this.arouter.queryParams.subscribe((res: any) => {
      this.newJobId = res?.jobId;
      this.updatedJob = res?.action;
      
      if(this.newJobId){
        this.loading = true;
        setTimeout(async () => {
          await this.collaborateService.getDataById('single-jobs', this.newJobId).subscribe((res:any) => {
            if(res?.status == 200) {
              this.jobForm.patchValue({...res?.data});
              this.loading = false;
            }
          });
        }, 500);
      }
    });
  }

  /**
   * Functiont to Build Form
   */
   buildForm() {
    this.jobForm = this.fb.group({
      id: [''],
      user_id: this.currentUser?.id,
      title: ['', Validators.required],
      author: [''],
      companyName: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
      salary: ['', Validators.required],
      fresherApply: [false],
      jobsType_id:['', Validators.required],
      workExperience: ['', Validators.required],
      skillsRequired: ['', Validators.required],
      qualification: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      email: ['', [Validators.required,  Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      website: ['', Validators.required],
      description: ['', Validators.required],
      status: [''],
      type: 'admin'
    })
  }

  get f() { return this.jobForm.controls; }
  
/**
 * Function to Add job
 */
  async addJob() {
    this.submitted = true;
    this.jobForm.value.author = this.author;
    if(this.jobForm.invalid) {
      return;
    } else {
      if(this.updatedJob != "update-jobs") {
        await this.collaborateService.postData('create-jobs', this.jobForm?.value).subscribe((res: any) => {
          if (res?.status == 200) {
            this.router.navigate(['/careers-jobs/admin-jobs']);
          }
        });
      } else {
        await this.collaborateService.updateData('update-jobs', this.jobForm?.value).subscribe((res: any) => {
          if (res?.status == 200) {
            this.router.navigate(['/careers-jobs/admin-jobs']);
          }
        });
      }
    }
  }

  async getAllJobTypes() {
    let action: string = "all-jobType";
    await this.collaborateService.getAllData(action).subscribe((res: any) => {
      if(res?.status == 200) {
        this.internshipData = res?.data.filter((res: any) => {
          if(res?.status == 'active') return res;
        });
      }
    },error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }

  clickToBack() {
    this.router.navigate(['/careers-jobs/admin-jobs']);
  }

}
