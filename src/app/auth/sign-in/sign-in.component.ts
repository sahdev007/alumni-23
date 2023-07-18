import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from "@angular/router";
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup | any;
  validLogin: any;
  submitted: boolean = false;
  loading:boolean = false;

  constructor(
    private authService: AuthService,
    // public notification: Notification,
    public fb: FormBuilder,
    public router: Router,
    public _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private interceptor: TokenInterceptor,
    public userService: UsersService
  ) {}

    // On Forgotpassword link click
    onForgotpassword() {
      this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
    }
  
    // On Signup link click
    onSignup() {
      // this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
    }
  


  ngOnInit(): void {
    this.buildForm();
      $.getScript('./assets/js/form-validations.js');
      $.getScript('./assets/js/bs-custom-file-input.min.js');
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      role:1
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
    this.loading = true;
      let params = this.loginForm.value;
      await this.authService.login(params).subscribe(
        (res: any) => {
          if (res.status === 200) {
            localStorage.setItem("currentUser", JSON.stringify(res?.user));
            localStorage.setItem("token", JSON.stringify(res?.access_token));
            this.loading=false;
            location.assign('/dashboard')
            // this.router.navigate(["/dashboard"]);
          } else {
            this.loading=false;
            this.interceptor.notificationService.openFailureSnackBar(
              res?.message
            );
          }
        },
        (error) => {;
          this.loading=false;
          this.interceptor.notificationService.openFailureSnackBar(error);
        }
      );
    }
  }
}
