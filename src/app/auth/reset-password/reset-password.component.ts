import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  countries: any;
  getBatch: any;
  getInstitutes: any;
  questions: any;
  submitted: boolean;
  currentUser;
  loading: boolean;
  userId: number;
  type: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private interceptor: TokenInterceptor,
    public arouter: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");

    this.arouter.queryParams.subscribe((res: any) => {
      if(res){
        this.userId = JSON.parse(res?.id);
        this.type = res?.type;
      }
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Function to build form
   */
  buildForm() {
    this.resetPasswordForm = this.fb.group(
      {
        id: [this.userId ? this.userId: this.currentUser.id],
        old_password: ["",[ Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        password: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        new_password_confirmation: ["", [Validators.required]],
      },
      {
        validators: this.passwordMatch(
          "password",
          "new_password_confirmation"
        ),
      }
    );
  }

  /**
   * Function to get all form control
   */
  get f() {
    return this.resetPasswordForm.controls;
  }

  /**
   * Function to match password with confirm password
   * @param passwordKey
   * @param confirmPasswordKey
   * @returns
   */
  passwordMatch(passwordKey: string, confirmPasswordKey: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordKey];
      const matchingControl = formGroup.controls[confirmPasswordKey];
      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  async submit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    } else {
      console.log(this.resetPasswordForm.value)
      await this.authService
        .resetPassword(this.resetPasswordForm?.value)
        .subscribe(
          (res: any) => {
            if (res.status == 200) {
              this.interceptor.notificationService.success(
                res?.message
              );
              if(!this.userId) {
                this.authService.logout();
                location.assign("/auth/sign-in");
              } else {
                this.router.navigate(['/dashboard/all-users']);
              }
            } else if (res?.status == 400) {
              this.interceptor.notificationService.error(
                res?.message
              );
            }
            else {
              this.interceptor.notificationService.error(
                res?.message
              );
            }
          },
          (error) => {
            this.interceptor.notificationService.error(error);
          }
        );
    }
  }
}
