import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Config } from '../../services/config';
import { TokenInterceptor } from '../../core/token.interceptor';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {
  @Input() profileData: any;
  @Input() otherProfile: any;
  othersForm: FormGroup;
  submitted: boolean = false;
  familyRelative: any;
  hobbies: any;
  currentUser: any;
  loading: boolean = false;
  otherId: any;

  constructor(public fb: FormBuilder,
    public config: Config,
    private dataService: DataService,
    private notify: TokenInterceptor
    ) {
    this.familyRelative = this.config?.familyAssociate;
    this.hobbies = this.config?.hobbies;
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  async ngOnInit() {
    this.buildForm();
    this.loading = true;
    setTimeout(() => {
      this.othersForm.patchValue({
        ...this.profileData?.Other,
      });
      this.loading = false;
    }, 2000);
  }

  /**
   * Build form Data
   */
  buildForm() {
    this.othersForm = this.fb.group({
      id: [""],
      family_and_relatives: [""],
      add_languages: ["", Validators.required],
      hobbies_and_passion: [""],
      other_hobbies_and_passion: [""],
      securityQuestions_id: [""],
      security_answer: [""],
    });
  }
  /**
   * Get form's controls
   */
  get f() {
    return this.othersForm.controls;
  }

  async edit() {
    this.submitted = true;
    if (this.othersForm.invalid) {
      return;
    } else if (this.othersForm.valid) {
      this.loading = true;
      let action: string = "update-other";
      this.othersForm.get('id').setValue(JSON.parse(this.profileData?.Other?.user_id));
      await this.dataService.updateData(action, this.othersForm.value).subscribe(
        (res: any) => {
          this.notify.notificationService.success(res?.message);
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.error(error);
          this.loading = false;
        }
      );
    }
  }

}
