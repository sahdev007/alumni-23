import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TokenInterceptor } from "../../core/token.interceptor";
import { Config } from "../../services/config";
import { CountryService } from "../../services/country.service";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-basic-info",
  templateUrl: "./basic-info.component.html",
  styleUrls: ["./basic-info.component.scss"],
})
export class BasicInfoComponent implements OnInit {
  @Input() profileData: any;
  @Input() otherProfile: any;
  @Input() commonData: any;
  @Input() type : any

  basicInfoForm: FormGroup;
  getInstitutes: any;
  getBatch: any;
  gender: any;
  maritalStatus: any;
  bloodGroup: any;
  countries: any;
  submitted: boolean = false;
  showOpt: boolean = false;
  region: any;
  currentUser: any;
  loading: boolean = false;
  userId: any;

  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    private dataService: DataService,
    private config: Config,
    private notify: TokenInterceptor,
    public arouter: ActivatedRoute
  ) {
    this.gender = this.config?.gender;
    this.maritalStatus = this.config?.maritalStatus;
    this.bloodGroup = this.config?.bloodGroup;
    this.region = this.config?.region;
    if (localStorage) {
      this.currentUser = localStorage?.getItem('currentUser') || '';
    }
  }

  async ngOnInit() {
    this.buildForm();
    this.loadCountries();

    setTimeout(() => {
        this.basicInfoForm.patchValue({
          ...this.profileData?.Users
        });
        this.basicInfoForm.patchValue({
          ...this.otherProfile
        });
    }, 2000);
  }

  /**
   * Build form data
   */
  buildForm() {
    this.basicInfoForm = this.fb.group({
      id: [""],
      first_name: ["", Validators.required],
      middle_name: [""],
      last_name: ["", Validators.required],
      institute_id: ["", Validators.required],
      batchYear_id: ["", Validators.required],
      Institute_wise_roll: [""],
      gender: ["", Validators.required],
      marital_status: [""],
      blood_group: [""],
      code: ["", Validators.required],
      mobile_number: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(16),
        ],
      ],
      phone_code: [""],
      phone_number: [""],
      display_mobile: [this.showOpt],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      office_email: [""],
      birth_date: ["", Validators.required],
      anniversary_date: [""],
      current_address: ["", Validators.required],
      country: [""],
      other_current_country: [""],
      current_region: [""],
      other_current_region: [""],
      current_state: ["", Validators.required],
      current_city: ["", Validators.required],
      permanent_address: ["", Validators.required],
      permanent_country: [""],
      other_permanent_country: [""],
      permanent_state: ["", Validators.required],
      permanent_city: ["", Validators.required],
      linkedin_id: [""],
      twitter_id: [""],
      skype_id: [""],
      facebook_id: [""],
      instagram_id: [""],
      council_member_designation: [""],
      role: [0]
    });
  }

  /**
   * Get form controls
   */
  get f() {
    return this.basicInfoForm.controls;
  }

  /**
   * Get all countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  /**
   * Function to change country
   * @param event
   */
  public changeCountry(event: any) {}


  async edit() {
    this.submitted = true;
    if (this.basicInfoForm.invalid) {
      return;
    } else {
      this.loading = true;
      let action: string = "update-user";
      await this.dataService
        .updateData(action, this.basicInfoForm.value)
        .subscribe(
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
