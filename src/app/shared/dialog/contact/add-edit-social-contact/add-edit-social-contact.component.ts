import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-edit-social-contact',
  templateUrl: './add-edit-social-contact.component.html',
  styleUrls: ['./add-edit-social-contact.component.scss']
})
export class AddEditSocialContactComponent implements OnInit {
  formInstance: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditSocialContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private contactService: ContactService,
    private notifyService : TokenInterceptor) { }

  ngOnInit(): void {
    this.buildForm();
    this.formInstance.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.formInstance = this.fb.group({
      id: this.data.action == "create-contact" ? '' : this.data?.data?.id,  
      title: ['', Validators.required],
      link: ['', Validators.required],
      type: ['SbupChannel'],
      is_active: ['inactive'],
      description: ['', Validators.required]
    });
  }

  get formControls() {
    return this.formInstance.controls;
  }

  async save() {
    this.submitted = true;
    if(this.data?.action == "update-contact") {
      await this.contactService.updateData(this.data?.action, this.formInstance?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    } else {
      await this.contactService.postData(this.data?.action, this.formInstance?.value).subscribe((item: any) => {
        if(item.status == 200){
          this.dialogRef.close();
          this.notifyService.notificationService.success(item?.message);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }
  }
}
