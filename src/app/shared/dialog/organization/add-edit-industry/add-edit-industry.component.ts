import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-add-edit-industry',
  templateUrl: './add-edit-industry.component.html',
  styleUrls: ['./add-edit-industry.component.scss']
})
export class AddEditIndustryComponent implements OnInit {

  primForm: FormGroup;
  seconForm: FormGroup
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditIndustryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private organizationService: OrganizationService,
    private notifyService: TokenInterceptor) {  

  }

  ngOnInit(): void {
    console.log(this.data)
    this.buildPrimForm();
    this.buildSeconForm();
    this.primForm.patchValue({
      ...this.data?.data
    });
    this.seconForm.patchValue({
      ...this.data?.data
    });
  }

  buildPrimForm() {
    this.primForm = this.fb.group({
      id: [''],
      primary_industry_focus: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  buildSeconForm() {
    this.seconForm = this.fb.group({
      id: [''],
      secondary_industry_focus: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  get p() {
    return this.primForm.controls;
  }

  get s() {
    return this.seconForm.controls;
  }

    /**
   * Function to create/update event type
   */
    async savePrim() {
      let action: string = this.data?.action == "create-primaryIndustry" ? 'create-primaryIndustry' : 'update-primaryIndustry';
      await this.organizationService.postData(action, this.primForm?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }

    async saveSecon() {
      let action: string = this.data?.action == "create-secondaryIndustry" ? 'create-secondaryIndustry' : 'update-secondaryIndustry';
      await this.organizationService.postData(action, this.seconForm?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }
}
