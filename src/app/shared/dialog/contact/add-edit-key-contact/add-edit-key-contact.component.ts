import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-edit-key-contact',
  templateUrl: './add-edit-key-contact.component.html',
  styleUrls: ['./add-edit-key-contact.component.scss']
})
export class AddEditKeyContactComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditKeyContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private contactService: ContactService, private notifyService: TokenInterceptor) {  

  }

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', Validators.required],
      description: ['', Validators.required],
      type: ['KeyContact']
    });
  }

  get f() {
    return this.form.controls;
  }

  async save() {
    this.submitted = true;
    if(this.form.invalid){
      return;
    } else {
      if(this.data?.action == "update-contact") {
        await this.contactService.updateData(this.data?.action, this.form?.value).subscribe((item: any) => {
          if(item.status == 200){
            this.dialogRef.close();
            this.notifyService.notificationService.success(item?.message);
          }
        }, error => {
            this.notifyService.notificationService.error(error);
        });
      } else {
        await this.contactService.postData(this.data?.action, this.form?.value).subscribe((item: any) => {
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

}
