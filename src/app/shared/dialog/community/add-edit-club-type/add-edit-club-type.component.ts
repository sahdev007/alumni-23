import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CommunityService } from 'src/app/services/community.service';

@Component({
  selector: 'app-add-edit-club-type',
  templateUrl: './add-edit-club-type.component.html',
  styleUrls: ['./add-edit-club-type.component.scss']
})
export class AddEditClubTypeComponent implements OnInit {

  clubTypeForm: FormGroup;
  submitted: boolean = false;

  constructor(public dialogRef: MatDialogRef<AddEditClubTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private communityServie: CommunityService, private notifyService: TokenInterceptor) { }

  ngOnInit(): void {
    console.log(this.data)
    this.buildForm();
    this.clubTypeForm.patchValue({
      ...this.data?.data
    })
  }

  buildForm() {
    this.clubTypeForm = this.fb.group({
      id: [''],
      type: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  get f() {
    return this.clubTypeForm.controls;
  }

  async save() {
    this.submitted = true;
    if(this.clubTypeForm.invalid) {
      return
    } else {
      if(this.data?.action == "create-clubType") {
        await this.communityServie.postData(this.data?.action, this.clubTypeForm?.value).subscribe((res: any) => {
          if(res?.status == 200) {
            this.dialogRef.close();
            this.notifyService.notificationService.success(res?.message);
          }
        });
      } else {
        
        await this.communityServie.updateData(this.data?.action, this.clubTypeForm?.value).subscribe((res: any) => {
          if(res?.status == 200) {
            this.dialogRef.close();
            this.notifyService.notificationService.success(res?.message);
          }
        });
      }
    }
  }

}
