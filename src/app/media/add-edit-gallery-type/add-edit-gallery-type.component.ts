import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-add-edit-gallery-type',
  templateUrl: './add-edit-gallery-type.component.html',
  styleUrls: ['./add-edit-gallery-type.component.scss']
})
export class AddEditGalleryTypeComponent implements OnInit {

  galleryForm: FormGroup;
  profilePic: any;
  image: any;
  action: any;
  currentUser: any;
  pageType: any;
  galleryId: any;
  submitted: boolean;
  loading: boolean;
  status: any;
  galleryData: any;

  constructor(
    public fb: FormBuilder,
    private celebrateService: CelebrateService,
    public aroute: ActivatedRoute,
    public router: Router,
    private notify: TokenInterceptor,
    private config: Config
  ) {
    this.status = this.config.status;
    if (localStorage) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
    }
    // Get Id by queryparams
    this.aroute.queryParams.subscribe(async (params: any) => {
      this.pageType = params?.action;
      this.galleryId = params?.id;

      //Get Single gallery data by Id
      if (this.galleryId) {
        this.loading = true;
        await this.celebrateService
          .getDataById("single-gallery", this.galleryId)
          .subscribe((res: any) => {
            console.log(res);
            this.galleryData = res?.data;
            this.galleryForm.patchValue({
              ...this.galleryData,
            });
            this.loading = false;
          });
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to Build form data
   */
  buildForm() {
    this.galleryForm = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      link: [""],
      type: ["", Validators.required],
      category: ["gallery"],
      order_by: [""],
      file: ["", Validators.required],
      status: [""],
    });
  }

  /**
   * Function to Add/Edit Gallery
   */
  async save() {
    this.submitted = true;
    if (this.galleryForm.invalid) {
      return;
    } else {
      let action = {
        action: this.pageType,
        id: this.pageType == "update-gallery" ? parseInt(this.galleryId) : "",
      };
      console.log(action);
      let formData = new FormData();
      formData.append("image", this.profilePic ? this.profilePic : "");
      formData.append("title", this.galleryForm.value.title);
      formData.append("link", this.galleryForm.value.link);
      formData.append("type", this.galleryForm.value.type);
      formData.append("order_by", this.galleryForm.value.order_by);
      formData.append("category", this.galleryForm.value.category);
      formData.append("status", this.galleryForm.value.status);

      await this.celebrateService.postData(action, formData).subscribe(
        (res: any) => {
          if (res?.status == 200) {
            this.notify.notificationService.success(res?.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
