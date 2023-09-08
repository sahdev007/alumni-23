import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-share-opportunity',
  templateUrl: './add-edit-share-opportunity.component.html',
  styleUrls: ['./add-edit-share-opportunity.component.scss']
})
export class AddEditShareOpportunityComponent implements OnInit {
  opportunityData: any;
  loading: boolean;
  pageType: any;
  shareOppForm: FormGroup;
  opportunityId: any;
  currentUser: any;
  submitted: boolean;
  status: any;
  author:any;
  
  constructor(public aroute: ActivatedRoute, private collaborateService: CollaborateService, 
    private fb: FormBuilder, public notifyService: TokenInterceptor, public router: Router, private config : Config) { 
      this.status = this.config.status;
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }

        // Get Id by queryparams
        this.aroute.queryParams.subscribe((params: any) => {
          console.log(params, 'test')
          this.opportunityId = params?.id;
          this.pageType = params?.action
        })
  }

  async ngOnInit() {
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;

    this.buildForm();
    if(this.opportunityId) this.getSingleAdmission();
  }
/**
 * Function to get single Admission panel by id
 */
  async getSingleAdmission() {
    this.loading = true;
    let action  = 'single-opportunity';
      await this.collaborateService.getDataById(action, this.opportunityId).subscribe((res:any) => {
        console.log(res);
        this.opportunityData = res?.data;
        this.shareOppForm.patchValue({...this.opportunityData});
        this.loading = false;
      }); 
  }

  buildForm () {
    this.shareOppForm = this.fb.group({
      id: [''],
      author: [''],
      type:['internship'],
      positionsForInternship: ['', Validators.required],
      specialization: ['', Validators.required],
      stipend: [''],
      status: ['']
    });
  }

     /**
   * Function to Edit Special Project data
   */
     async save() {
      this.submitted = true;
      if(this.shareOppForm.invalid) {
        return;
      } else {
        await this.collaborateService.updateData(this.pageType, this.shareOppForm?.value).subscribe((x: any) => {
          if(x?.status == 200) {
            this.notifyService.notificationService.success(x?.message);
            this.router.navigate(['/collaborate/share-opportunities']);
          }
        });
      }
    }
}
