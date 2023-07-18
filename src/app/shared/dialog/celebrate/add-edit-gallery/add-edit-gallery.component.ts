import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-add-edit-gallery',
  templateUrl: './add-edit-gallery.component.html',
  styleUrls: ['./add-edit-gallery.component.scss']
})
export class AddEditGalleryComponent implements OnInit {

  galleryForm: FormGroup;
  profilePic: any;
  image: any;
  updatedGallery: any;
  submitted: boolean = false;

  constructor(private celebrateService: CelebrateService, public fb: FormBuilder,
     @Inject(MAT_DIALOG_DATA) public data: any,
  public dialog: MatDialog, public dialogref: MatDialogRef<AddEditGalleryComponent>) { }

  ngOnInit(): void {
    this.buildForm();
    this.updatedGallery = this.data?.data?.file;
    this.galleryForm.patchValue({
      ...this.data?.data
    });
  }

  buildForm() {
    this.galleryForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      link: [''],
      type: ['', Validators.required],
      category: ['gallery'],
      order_by: [''],
      file: ['', Validators.required],
      is_active: ['']
    });
  }

  async save() {
    this.submitted = true;
    let action = {
      action: this.data?.action,
      id: this.data?.action == 'create-gallery' ? '' : parseInt(this.data?.data?.id)
    }

    if(this.galleryForm.invalid){
      return;
    } else {
      let formData = new FormData();
      formData.append('image', (this.profilePic) ? this.profilePic : '');
      formData.append('title', this.galleryForm.value.title);
      formData.append('link', this.galleryForm.value.link);
      formData.append('type', this.galleryForm.value.type);
      formData.append('order_by', this.galleryForm.value.order_by);
      formData.append('category', this.galleryForm.value.category);
      formData.append('is_active', this.galleryForm.value.is_active);

      await this.celebrateService.postData(action, formData).subscribe((res: any) => {
        if (res?.status == 200) {
          this.dialogref.close();
        }
      }, error => {
        console.log(error)
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
