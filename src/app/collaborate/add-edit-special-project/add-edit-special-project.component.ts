import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CollaborateService } from 'src/app/services/collaborate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-special-project',
  templateUrl: './add-edit-special-project.component.html',
  styleUrls: ['./add-edit-special-project.component.scss']
})
export class AddEditSpecialProjectComponent implements OnInit {
  editSpecialForm: FormGroup;
  pageType: any;
  projectId: number;
  loading: boolean;
  submitted: boolean;
  status: any;
  author: any;
  currentUser: any;

  constructor(public fb: FormBuilder, public arouter: ActivatedRoute,
    private collaborateService: CollaborateService, public config: Config,
    public notifyService: TokenInterceptor, public router: Router) { 
      this.status = this.config?.status;
      if (localStorage) {
        this.currentUser = JSON?.parse(
          localStorage?.getItem("currentUser") || ""
        );
      }
    }

  ngOnInit() {
    this.buildForm();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;
    // Get Queryparams
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.projectId = res?.id;
    });
    if(this.projectId) this.getSingleProject();
  }
/**
 * Function to get single project detail by id
 */
  async getSingleProject(){
    this.loading = true;
    let action  = 'single-project';
    await this.collaborateService.getDataById(action, this.projectId).subscribe((res:any) => {
      this.editSpecialForm.patchValue({...res?.data[0]});
      this.loading = false;
    });  
  }
/**
 * Function to Build form data
 */
  buildForm() {
    this.editSpecialForm = this.fb.group({
      id: [''],
      author: [this.author],
      title: ['', Validators.required],
      charityName: ['', Validators.required],
      monetaryDonation: [false],
      timeDonation: [false],
      contactName: ['', Validators.required],
      code: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      link: ['', Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
/**
 * Function to Add/Update Project data
 * @returns 
 */
  async save() {
    this.submitted = true;
    if(this.editSpecialForm?.invalid){
      return;
    } else {
      await this.collaborateService.updateData(this.pageType, this.editSpecialForm.value).subscribe((x: any) => {
        if(x?.status == 200) {
          this.notifyService.notificationService.success(x?.message);
          this.router.navigate(['/collaborate/special-projects']);
        }
      }, error => {
        this.notifyService.notificationService.error(error);
      });
    }
  }
}
