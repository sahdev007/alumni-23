import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.scss']
})
export class AddEditNewsComponent implements OnInit {

  newsForm : FormGroup;
  profilePic: any;
  image: any;
  action: any;
  currentUser: any;
  type: any;
  newsId: number;
  newsData: any;
  newsStatus: any;
  updatedFile: any;
  author: any;
  submitted:boolean;
  loading: boolean;

  constructor(public fb: FormBuilder, private celebrateService : CelebrateService,
    public aroute: ActivatedRoute, public router: Router,
    private notify: TokenInterceptor) {
    if (localStorage) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
    }
    // Get Id by queryparams
    this.aroute.queryParams.subscribe(async (params: any) => {
      this.type = params?.action;
      this.newsId = params?.newsId;

      if (this.newsId) {
        this.loading = true;
        await this.celebrateService
          .getDataById("single-news", this.newsId)
          .subscribe((res: any) => {
            this.newsData = res?.data;
            this.newsStatus = res?.data?.status;
            this.updatedFile = res?.data?.newsImage;
            this.newsForm.patchValue({
              ...this.newsData,
            });
            this.loading = false;
          });
        }

    });
   }

  ngOnInit(): void {
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname + (mname == null ? "" : " " + mname) + " " + lname;
    this.buildForm();
    $.getScript('./assets/js/form-validations.js');
    $.getScript('./assets/js/bs-custom-file-input.min.js');
  }

  buildForm() {
    this.newsForm = this.fb.group({
      id: [""],
      author: [""],
      title: ["", [Validators.required]],
      description: ["", Validators.required],
      status: ["", Validators.required],
      expiryDate: [""],
      newsImage: ["", Validators.required],
    });
  }

  async save() {
    this.submitted = true;
    if (this.newsForm.invalid) {
      return;
    } else {
      this.action = {
        action: this.type == "update-news" ? "update-news" : "create-news",
        id: this.type == "update-news" ? this.newsId : "",
      };

      let formData = new FormData();
      formData.append("newsImage", this.profilePic ? this.profilePic : "");
      formData.append("author", this.author);
      formData.append("title", this.newsForm.value.title);
      formData.append("description", this.newsForm.value.description);
      formData.append("status", this.newsForm.value.status);
      formData.append("expiryDate", this.newsForm.value.expiryDate);

      await this.celebrateService.postData(this.action, formData).subscribe(
        (res: any) => {
          if (res?.status === 200) {
            this.router.navigate(["/media/news-and-updates"]);
            this.notify.notificationService.success(res?.message);
          }
        },
        (error) => {
            console.log(error);
        }
      );
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
      };
    }
  }
}
