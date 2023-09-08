import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { Config } from 'src/app/services/config';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-add-edit-secondary-function',
  templateUrl: './add-edit-secondary-function.component.html',
  styleUrls: ['./add-edit-secondary-function.component.scss']
})
export class AddEditSecondaryFunctionComponent implements OnInit {

  loading:boolean;
  status: any;
  eventId: any;
  eventData: any;
  form: FormGroup;
  pageType:any;
  submitted: boolean;
  constructor(
    public fb: FormBuilder, 
    public notifyService: TokenInterceptor, 
    private organizationServie: OrganizationService, 
    public arouter: ActivatedRoute,
    public router: Router, 
    private config: Config) { 
      this.status = this.config?.status;
    }


  async ngOnInit() {
    this.buildForm();
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res);
      this.pageType = res?.action;
      this.eventId = res?.id;
    });
    /**Get and single team data and Patch with form */
      if(this.eventId) this.getSingleFunction();
  }


  async getSingleFunction() {
    this.loading = true;
    let action: string = "single-secondaryFunction";
    await this.organizationServie.getDataById(action, this.eventId).subscribe((x: any) => {
        this.eventData = x?.data;
        setTimeout(() => {
          this.form.patchValue({...this.eventData});
          this.loading = false;
        }, 500);
    });
  }

  /**
   * Function to Build Form data
   */
  buildForm() {
    this.form = this.fb.group({
      id: [''],
      secondary_function_area: ['', Validators.required],
      status: ['', Validators.required]
    })
  }

    /**
   * Function to create/update event type
   */
    async save() {
      this.submitted = true;
      if(this.form?.invalid){
        return;
      }
      else{
        let action: string = this.pageType == "update-secondaryFunction" ? 'update-secondaryFunction': 'create-secondaryFunction';
        await this.organizationServie.postData(action, this.form?.value).subscribe((item: any) => {
          if(item?.status == 200){
            this.notifyService.notificationService.success(item?.message);
            this.router.navigate(['/organization/secondary-function']);
          }
        }, error => {
            this.notifyService.notificationService.error(error);
        });
      }
    }

}
