import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  

  forgotPassForm: FormGroup | any;
  submitted: boolean = false;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private authService: AuthService,
    private notificationService: NotificationService,

    public fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildForm();
    $.getScript('./assets/js/form-validations.js');
    $.getScript('./assets/js/bs-custom-file-input.min.js');
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
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
    });
  }

  /**
   * Get all form control
   */
  get f() {
    return this.forgotPassForm.controls;
  }
	// On SignIn link click
	onSignIn() {
	  this.router.navigate(['sign-in'], { relativeTo: this.route.parent });
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
    let data: any = await this.authService
      .forgotPassword(this.forgotPassForm.value)
      .toPromise();
    if (data?.status === 200) {
      this.notificationService.openSuccessSnackBar(data?.message, "close");
      this.router.navigate(["/auth/sign-in"]);
    }
  }
}
}
