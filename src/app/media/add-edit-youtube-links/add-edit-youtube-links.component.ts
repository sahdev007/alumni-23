import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenInterceptor } from "src/app/core/token.interceptor";
import { CelebrateService } from "src/app/services/celebrate.service";
import { Config } from "src/app/services/config";

@Component({
  selector: "app-add-edit-youtube-links",
  templateUrl: "./add-edit-youtube-links.component.html",
  styleUrls: ["./add-edit-youtube-links.component.scss"],
})
export class AddEditYoutubeLinksComponent implements OnInit {
  youtubeForm: FormGroup;
  status: any;
  pageType: any;
  youtubeId: any;
  loading: boolean;
  youtubeData: any;
  profilePic: any;
  image: any;
  submitted: boolean;
  currentUser: any;

  constructor(
    public fb: FormBuilder,
    private celebrateService: CelebrateService,
    public aroute: ActivatedRoute,
    public router: Router,
    private notify: TokenInterceptor,
    private config: Config
  ) {
    this.status = this.config.status;
    //Get Current User
    if (localStorage) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
    }

    // Get Id by queryparams
    this.aroute.queryParams.subscribe(async (params: any) => {
      this.pageType = params?.action;
      this.youtubeId = params?.id;

      //Get Single gallery data by Id
      if (this.youtubeId) {
        this.loading = true;
        await this.celebrateService
          .getDataById("single-youtube", this.youtubeId)
          .subscribe((res: any) => {
            console.log(res);
            this.youtubeData = res?.data;
            this.youtubeForm.patchValue({
              ...this.youtubeData,
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
    this.youtubeForm = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      link: ["", Validators.required],
      category: ["youtube"],
      status: [""],
      user_id: [this.currentUser?.id],
    });
  }

  /**
   * Function to Add/Edit Gallery
   * @returns
   */
  async save() {
    this.submitted = true;

    if (this.youtubeForm.invalid) {
      return;
    } else {
      if (this.pageType == "create-youtube") {
        await this.celebrateService
          .postData(this.pageType, this.youtubeForm.value)
          .subscribe(
            (res: any) => {
              if (res?.status == 200) {
                this.notify.notificationService.success(res?.message);
                this.router.navigate(['/media/youtube-links']);
              }
            },
            (error) => {
              this.notify.notificationService.error(error);
            }
          );
      } else {
        await this.celebrateService
          .updateData(this.pageType, this.youtubeForm.value)
          .subscribe(
            (res: any) => {
              if (res?.status == 200) {
                this.notify.notificationService.success(res?.message);
                this.router.navigate(['/media/youtube-links']);
              }
            },
            (error) => {
              this.notify.notificationService.error(error);
            }
          );
      }
    }
  }
}
