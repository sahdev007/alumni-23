import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-admission-panel',
  templateUrl: './add-edit-admission-panel.component.html',
  styleUrls: ['./add-edit-admission-panel.component.scss']
})
export class AddEditAdmissionPanelComponent implements OnInit {

  admissionId: number;
  pannelData: any;
  loading: boolean;
  pageType: any;
  admissionPanelForm: FormGroup;
  currentUser: any;
  submitted: boolean;
  status: any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService, 
    private fb: FormBuilder, public notifyService: TokenInterceptor, public router: Router, private config : Config) { 
      this.status = this.config.status;
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }

        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          console.log(params, 'test')
          this.admissionId = params?.id;
          this.pageType = params?.action
        })
  }

  async ngOnInit() {
    this.buildForm();
    if(this.admissionId) this.getSingleAdmission();
  }
/**
 * Function to get single Admission panel by id
 */
  async getSingleAdmission() {
    this.loading = true;
    let action  = 'single-admission';
      await this.collaborateService.getDataById(action, this.admissionId).subscribe((res:any) => {
        this.pannelData = res?.data;
        this.admissionPanelForm.patchValue({...this.pannelData});
        this.loading = false;
      }); 
  }
/**
 * Build Form Data
 */
  buildForm() {
    this.admissionPanelForm = this.fb.group({
      id: [""],
      city: ['', Validators.required],
      location: ['', Validators.required],
      date_time: ['', Validators.required],
      status: ["", Validators.required],
      user_id: [this.currentUser?.id]
    });
  }

  async save() {
    this.submitted = true;
    if (this.pageType !== 'update-admission') {
      await this.collaborateService.postData(this.pageType, this.admissionPanelForm.value).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notifyService.notificationService.success(res?.message);
          this.router.navigate(['/collaborate/participate-in-admission-panel']);
        }
      });
    } else {
      let params = {
        id : this.admissionId,
        ...this.admissionPanelForm?.value
      }
      await this.collaborateService.updateData(this.pageType, params).subscribe((res: any) => {
        if (res?.status === 200) {
          this.notifyService.notificationService.success(res?.message); 
          this.router.navigate(['/collaborate/participate-in-admission-panel']);
        }
      });
    }
  }
}
