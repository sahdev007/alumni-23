import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-magazine',
  templateUrl: './add-edit-magazine.component.html',
  styleUrls: ['./add-edit-magazine.component.scss']
})
export class AddEditMagazineComponent implements OnInit {

  magazineForm : FormGroup;
  submitted: boolean = false;
  profilePic: any;
  image: any;
  updatedFile: any;
  imgPath: any;

  constructor(private celebrateService: CelebrateService, private notifyService: TokenInterceptor, public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, public dialogref: MatDialogRef<AddEditMagazineComponent>) { 
      this.imgPath = environment.imgUrl;
    }

 ngOnInit(): void {
   this.buildForm();
   console.log(this.data?.data?.id)
   this.updatedFile = this.data?.data?.file
   this.magazineForm.patchValue({
    ...this.updatedFile,
    ...this.data?.data
   });
 }

 buildForm() {
   this.magazineForm = this.fb.group({
    id: [''],
    magazine_name: ['', Validators.required],
    link: ['', Validators.required],
    file: [''],
    subscribe_user: [''],
    status: [''] 
   });
 }

 async save() {
  this.submitted = true;
  if (this.magazineForm.invalid) {
    return;
  } else {
    let action = {
      action: this.data?.action,
      id: this.data?.action == 'create-magazine' ? '' : parseInt(this.data?.data?.id)
    }

    const formData: FormData = new FormData();
    formData.append('file', (this.profilePic) ?  this.profilePic: '');
    formData.append('magazine_name', this.magazineForm?.value?.magazine_name);
    formData.append('link', this.magazineForm?.value?.link);
    formData.append('subscribe_user', this.magazineForm?.value?.subscribe_user);
    formData.append('status', this.magazineForm?.value?.status);

    await this.celebrateService.postData(action, formData).subscribe((res: any) => {
      if (res?.status === 200) {
        this.notifyService.notificationService.success(res?.message);
        this.dialogref.close();
      }
    }, error => {
      this.notifyService.notificationService.error(error);
    });

  }
 }

 onUploadImage(event: any) {
  this.profilePic = event.target.files[0];
  if (event?.target?.files && event?.target?.files[0]) {
    this.profilePic = event?.target?.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.image = _event.target?.result;
    }
  }
}

}
