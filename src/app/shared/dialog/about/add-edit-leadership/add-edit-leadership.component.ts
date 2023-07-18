import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AboutService } from 'src/app/services/about.service';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-leadership',
  templateUrl: './add-edit-leadership.component.html',
  styleUrls: ['./add-edit-leadership.component.scss']
})
export class AddEditLeadershipComponent implements OnInit {
  leadershipForm: FormGroup;
  submitted: boolean = false;
  profilePic: any;
  image: any;
  imgPath: any;

  constructor(
    public dialogRef: MatDialogRef<AddEditLeadershipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, private teamService: AboutService) { 
      this.imgPath = environment.imgUrl
    }

  ngOnInit(): void {
    this.buildForm();
    this.leadershipForm.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.leadershipForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      order: ['', Validators.required],
      institute_name: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  /**
 * on upload image
 * @param event 
 */
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

  
  
  async save() {
    this.submitted = true;

    let action = {
      action: this.data?.action,
      id: this.data?.action == 'create-team' ? '' : parseInt(this.data?.data?.id)
    }
    if(this.leadershipForm.invalid){
      return;
    } else {
      let formData = new FormData();
      formData.append('image', (this.profilePic) ? this.profilePic : '');
      formData.append('name', this.leadershipForm?.value?.name);
      formData.append('designation', this.leadershipForm?.value?.designation);
      formData.append('order', this.leadershipForm?.value?.order);
      formData.append('institute_name', this.leadershipForm?.value?.institute_name);

      await this.teamService.postData(action, formData).subscribe((res: any) => {
        if (res?.status === 200) {
          console.log('team created');
          this.dialogRef.close();
          this.ngOnInit();
        }
      }, error => {
        console.log(error);
      });
    }
  }

}
