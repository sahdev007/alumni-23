import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-add-edit-journey-achievement-passion',
  templateUrl: './add-edit-journey-achievement-passion.component.html',
  styleUrls: ['./add-edit-journey-achievement-passion.component.scss']
})
export class AddEditJourneyAchievementPassionComponent implements OnInit {
  celebrateForm: FormGroup;
  submitted: boolean;
  celPic: any;
  img: any;
  allInstitutes: any;
  updatedInstitute: any;
  updatedStatus: any;

  constructor(public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddEditJourneyAchievementPassionComponent>,
    private celebrateService: CelebrateService, private notifyService: TokenInterceptor) { }

  ngOnInit(): void {
    this.buildForm();
    this.getAllInstitutes();
    this.updatedStatus = this.data?.data?.status;
    this.celebrateForm.patchValue({
      ...this.data?.data
    })
  }

  buildForm() {
    this.celebrateForm = this.fb.group({
      id: [this.data?.data?.id],
      user_id: [this.data?.data?.user_id],
      title: ['', Validators.required],
      institute_id: ['', Validators.required],
      type: [this.data?.type],
      description: ['', Validators.required],
      status:[""],
      photo: [""]
    })
  }

  async save() {
    this.submitted = true;
    if (this.celebrateForm.invalid) {
      return;
    } else {
      let action = {
        action: this.data?.action,
        id: this.data?.action == 'update-journey' ?  parseInt(this.data?.data?.id) : ''
      }

      const formData: FormData = new FormData();
      formData.append('photo', (this.celPic) ?  this.celPic: '');
      formData.append('user_id', this.celebrateForm?.value?.user_id);
      formData.append('title', this.celebrateForm?.value?.title);
      formData.append('type', this.celebrateForm?.value?.type);
      formData.append('institute_id', this.celebrateForm?.value?.institute_id);
      formData.append('description', this.celebrateForm?.value?.description);
      formData.append('status', this.celebrateForm?.value?.status);
  
      await this.celebrateService.postData(action, formData).subscribe((res: any) => {
        if (res?.status === 200) {
          this.dialogRef.close();
          this.notifyService.notificationService.success(res?.message);
        }
      }, error => {
        this.notifyService.notificationService.error(error);
      });
    }
  }

  onUploadImg(event: any) {
    this.celPic = event?.target?.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.celPic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event?.target?.files[0]);
      reader.onload = (_event) => {
        this.img = _event?.target?.result;
      }
    }
  }

  async getAllInstitutes() {
    let action: string = "all-institute"
    await this.celebrateService.getAllData(action).subscribe(
      (res: any) => {
        this.allInstitutes = res?.Institute;
      },
      (error) => {
      }
    );
  }
}
