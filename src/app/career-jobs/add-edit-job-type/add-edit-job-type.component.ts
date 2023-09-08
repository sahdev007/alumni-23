import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-job-type',
  templateUrl: './add-edit-job-type.component.html',
  styleUrls: ['./add-edit-job-type.component.scss']
})
export class AddEditJobTypeComponent implements OnInit {

  jobTypeForm: FormGroup;
  submitted:boolean;
  jobId: any;
  jobData: any;
  pageType: any;
  status: any;
  loading: boolean;

  constructor(public fb: FormBuilder, public notifyService: TokenInterceptor, 
    private collaborateServie: CollaborateService, public arouter: ActivatedRoute,
    public router: Router, private config: Config) { 
      this.status = this.config?.status;
    }

  async ngOnInit() {
    this.buildForm();
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.jobId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.jobId) this.getSingleJobs();
  }

  async getSingleJobs() {
    this.loading = true;
    let action: string = "single-jobType";
    await this.collaborateServie.getDataById(action, this.jobId).subscribe((x: any) => {
      this.loading = true;
        this.jobData = x?.data;
        setTimeout(() => {
          this.jobTypeForm.patchValue({...this.jobData});
          this.loading = false;
        }, 1500);
    });
  }

  buildForm() {
    this.jobTypeForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  async save() {
    this.submitted = true;
    if(this.pageType == "create-jobType") {
      await this.collaborateServie.postData(this.pageType, this.jobTypeForm?.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notifyService.notificationService.success(res?.message);
          this.router.navigate(['/collaborate/job-type']);
        }
      });
    } else {     
      await this.collaborateServie.updateData(this.pageType, this.jobTypeForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notifyService.notificationService.success(res?.message);
          this.router.navigate(['/collaborate/job-type']);
        }
      });
    }
  }

}
