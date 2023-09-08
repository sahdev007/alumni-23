import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TokenInterceptor } from "src/app/core/token.interceptor";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;
  submitted: boolean;
  loading: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private notifyService: TokenInterceptor,

    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to bulid form
   */
  buildForm() {
    this.forgotPassForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([A-Za-z]{2,6}(?:\\.[A-Za-z]{2,6})?)$"),
        ],
      ],
    });
  }

  get f() {
    return this.forgotPassForm.controls;
  }

  // On SignIn link click
  onSignIn() {
    this.router.navigate(["sign-in"], { relativeTo: this.route.parent });
  }

  /**
   * Function to submit email
   * @returns
   */
  async submit() {
    this.submitted = true;
    if (this.forgotPassForm.invalid) {
      return;
    } else {
      this.loading = true;
      await this.authService
        .forgotPassword(this.forgotPassForm.value)
        .subscribe((item: any) => {
          console.log(item)
          if (item?.status == 200) {
            this.notifyService.notificationService.success(item?.message);
            this.router.navigate(["/auth/sign-in"]);
            this.loading = false;
          } else if(item?.status == 404) {
            this.notifyService.notificationService.warning(item?.message);
            this.loading = false;
          }
        },
        error => {
          this.notifyService.notificationService.error(error);
          this.loading = false;
        });
    }
  }
}
