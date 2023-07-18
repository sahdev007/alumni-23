import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-add-edit-youtube-links',
  templateUrl: './add-edit-youtube-links.component.html',
  styleUrls: ['./add-edit-youtube-links.component.scss']
})
export class AddEditYoutubeLinksComponent implements OnInit {

  youtubeLinksForm: FormGroup;
  profilePic: any;
  image: any;
  submitted: boolean = false;

  constructor(private celebrateService: CelebrateService, public fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialog, public dialogref: MatDialogRef<AddEditYoutubeLinksComponent>) { }

  ngOnInit(): void {
    this.buildForm();
    this.youtubeLinksForm.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.youtubeLinksForm = this.fb.group({
      id:[''],
      title: ['', Validators.required],
      link: ['', Validators.required],
      category: ['youtube'],
      is_active: 'active'
    });
  }

  async save() {
    this.submitted = true;

    if(this.youtubeLinksForm.invalid){
      return;
    } else {
      if(this.data?.action == 'create-youtube') {
        await this.celebrateService.postData(this.data?.action, this.youtubeLinksForm.value).subscribe((res: any) => {
          if (res?.status == 200) {
            this.dialogref.close();
          }
        }, error => {
          console.log(error)
        });
      } else {
        await this.celebrateService.updateData(this.data?.action, this.youtubeLinksForm.value).subscribe((res: any) => {
          if (res?.status == 200) {
            this.dialogref.close();
          }
        }, error => {
          console.log(error)
        });
      }
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
