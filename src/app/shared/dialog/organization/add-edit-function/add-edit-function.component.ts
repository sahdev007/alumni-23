import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-add-edit-function',
  templateUrl: './add-edit-function.component.html',
  styleUrls: ['./add-edit-function.component.scss']
})
export class AddEditFunctionComponent implements OnInit {
  primFunForm: FormGroup;
  seconFunForm: FormGroup
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditFunctionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private organizationService: OrganizationService,
    private notifyService: TokenInterceptor) {  

  }

  ngOnInit(): void {
    this.buildPrimForm();
    this.buildSeconForm();
    this.primFunForm.patchValue({
      ...this.data?.data
    });
    this.seconFunForm.patchValue({
      ...this.data?.data
    });
  }

  buildPrimForm() {
    this.primFunForm = this.fb.group({
      id: [''],
      primary_function_area: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  buildSeconForm() {
    this.seconFunForm = this.fb.group({
      id: [''],
      secondary_function_area: ['', Validators.required],
      status: ['', Validators.required]
    });
  }


  get p() {
    return this.primFunForm.controls;
  }

  get s() {
    return this.seconFunForm.controls;
  }

    /**
   * Function to create/update event type
   */
    async savePrimFun() {
      let action: string = this.data?.action == "create-primaryFunction" ? 'create-primaryFunction' : 'update-primaryFunction';
      await this.organizationService.postData(action, this.primFunForm?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }

    async saveSeconFun() {
      let action: string = this.data?.action == "create-secondaryFunction" ? 'create-secondaryFunction' : 'update-secondaryFunction';
      await this.organizationService.postData(action, this.seconFunForm?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }
}
