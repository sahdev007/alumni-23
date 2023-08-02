import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from '../core/token.interceptor';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CountryService } from '../services/country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isFormEditable: Boolean = false;
  institues: Array<any> = [];
  profileForm: FormGroup | any;
  profilePic: any;
  image: any = '';
  submitted: boolean | undefined;
  currentUser: any;
  action: any;
  imgPath = environment.imgUrl;
  profileData: any;
  userId: any;
  otherProfile: any;
  user: any;
  type: any;
  commonData: any;

  //Basic Info
  basicInfoForm: FormGroup | any;
  getInstitutes: any;
  getBatch: any;
  gender: any;
  maritalStatus: any;
  bloodGroup: any;
  countries: any;
  region: any;
  showOpt: boolean = false;
  loading: boolean = false;

  //Emp / Business
  empBuisnessForm: FormGroup | any;
  professionalTitle: any;
  professionCategory: any;
  empId: any;

  //Mentorship 
  mentorForm: FormGroup | any;
  functionArea: any;
  industryFocus: any;
  mentorId: any;
  mentee: Array<any> = [];
  mentor: Array<any> = [];
  allSkills: any;
  isCurrentUser: boolean = false;
  mentorData: any;

  //Experience
  experienceForm: FormGroup | any;
  experienceId: any;
  //Education 
  educationForm: FormGroup | any;
  specialization: any;
  eduId: any;
  // Others
  othersForm: FormGroup | any;
  familyRelative: any;
  hobbies: any;
  otherId: any;

  constructor(public dataService: DataService,
    public fb: FormBuilder,
    private notify: TokenInterceptor,
    public countryService: CountryService,
    private arouter: ActivatedRoute,
    private _location: Location) {
    if (localStorage) {
      this.currentUser =
        JSON?.parse(localStorage?.getItem("currentUser") || "");
    }
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res)
      this.userId = res?.id;
      this.type = res?.type;
      if(this.type) this.isFormEditable = true;
    });

    this.getAllProfileData();

  }

  ngOnInit(): void {
    $.getScript('./assets/js/form-validations.js');
    $.getScript('./assets/js/bs-custom-file-input.min.js');
    this.buildForm();
    this.getCommonData();

    setTimeout(() => {
      this.buildBasicInfoForm();
      this.buildEmpBusinessForm();
      this.buildMentorshipform();
      this.buildExperienceform();
      this.buildEducationform();
      this.buildOthersForm();
      if(!this.userId){
          this.getCurrentUser();
      }
      this.basicInfoForm.patchValue({
        ...this.user
      });
      this.empBuisnessForm.patchValue({
        ...this.user
      });
      this.mentorForm.patchValue({
        ...this.user
      });
      this.experienceForm.patchValue({
        ...this.user
      });
      this.educationForm.patchValue({
        ...this.user
      });
      this.othersForm.patchValue({
        ...this.user
      });
    }, 2000);
  }

  /**
   * Build form data
   */
  buildBasicInfoForm() {
    this.basicInfoForm = this.fb.group({
      id: [this.currentUser?.id],
      first_name: ["", Validators.required],
      middle_name: [""],
      last_name: ["", Validators.required],
      institute_id: ["", Validators.required],
      batchYear_id: ["", Validators.required],
      Institute_wise_roll: [""],
      gender: ["", Validators.required],
      marital_status: [""],
      blood_group: [""],
      code: [""],
      mobile_number: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
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
      role: [0],
    });
  }

  get b() { return this.basicInfoForm.controls; }

  //Build Emp/Business form
  buildEmpBusinessForm() {
    this.empBuisnessForm = this.fb.group({
      id: [this.empId?.id],
      professional_title: [""],
      other_professional_title: [""],
      professional_category: [""],
      current_employer: [""],
      current_office_address: [""],
      business_owner: [""],
      business_name: [""],
    });
  }
  /**
    * Function to build form data
    */
  buildMentorshipform() {
    this.mentorForm = this.fb.group({
      id: [this.mentorId?.id],
      willing_to_provide_mentorship: ["", Validators.required],
      willing_to_be_mentee: ["", Validators.required],
      skill_id: ["", Validators.required],
      primary_function_area: [""],
      secondary_function_area: [""],
      other_function_area: [""],
      primary_industry_focus: [""],
      secondary_industry_focus: [""],
      other_industry_focus: [""],
    });
  }
  /**
   * Build 
   */
  buildEducationform() {
    this.educationForm = this.fb.group({
      id: [this.eduId?.id],
      degree_name: ["", Validators.required],
      institute_name: ["", Validators.required],
      passing_year: ["", Validators.required],
      specialization: ["", Validators.required],
      other_specialization: [""],
      addItems: this.fb.array([]),
    });
  }

  /**
   * Build Experience form
   */
  buildExperienceform() {
    this.experienceForm = this.fb.group({
      id: [this.experienceId?.id],
      company_name: [""],
      job_title: [""],
      start_date: [""],
      end_date: [""],
      current_working: [''],
      summary: [""],
      addItems: this.fb.array([]),
    });
  }
  /**
   * Build Others form
   */
  buildOthersForm() {
    this.othersForm = this.fb.group({
      id: [this.otherId?.id],
      family_and_relatives: [""],
      add_languages: ["", Validators.required],
      hobbies_and_passion: [""],
      other_hobbies_and_passion: [""],
      securityQuestions_id: [""],
      security_answer: [""],
    });
  }
  /**
   * Get all countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  async getCommonData() {
    let action = "all-common";
    await this.dataService.getAllData(action).subscribe(
      (res: any) => {
        this.commonData = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Function to change country
   * @param event
   */
  public changeCountry(event: any) { }


  async updateBasicInfo() {
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
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            this.loading = false;
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
            this.loading = false;
          }
        );
    }
  }

  async updateEmpBusiness() {
    this.submitted = true;
    this.loading = true;
    let action: string = "update-user";
    await this.dataService
      .updateData(action, this.empBuisnessForm.value)
      .subscribe(
        (res: any) => {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
  }

  async updateMentorship() {
    this.submitted = true;
    if (this.mentorForm.invalid) {
      return;
    } else {
      this.loading = true;
      let action: string = "update-user";
      await this.dataService
        .updateData(action, this.mentorForm.value)
        .subscribe(
          (res: any) => {
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            this.loading = false;
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
            this.loading = false;
          }
        );
    }
  }

  async updateWorkExperience() {
    this.submitted = true;
    this.loading = true;
    let action: string = "update-user";
    await this.dataService
      .updateData(action, this.experienceForm.value)
      .subscribe(
        (res: any) => {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
  }

  async updateEducation() {
    this.submitted = true;
    if (this.experienceForm.invalid) {
      return;
    } else {
      this.loading = true;
      let action: string = "update-user";
      await this.dataService
        .updateData(action, this.experienceForm.value)
        .subscribe(
          (res: any) => {
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            this.loading = false;
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
            this.loading = false;
          }
        );
    }
  }
  async updateOther() {
    this.submitted = true;
    if (this.othersForm.invalid) {
      return;
    } else {
      this.loading = true;
      let action: string = "update-user";
      await this.dataService
        .updateData(action, this.othersForm.value)
        .subscribe(
          (res: any) => {
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            this.loading = false;
          },
          (error) => {
            this.notify.notificationService.openFailureSnackBar(error);
            this.loading = false;
          }
        );
    }
  }
  buildForm() {
    this.profileForm = this.fb.group({
      profile_pic: [""]
    });
  }

  async onUploadImage(event: any) {
    this.profilePic = event.target.files[0];
    this.loading = true;
    if (event?.target?.files && event?.target?.files[0]) {
      this.profilePic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      };

      if (this.userId == this.currentUser?.id) {
        this.action = {
          action: "profile-pic",
          id: parseInt(this.currentUser?.id)
        };
  
        let formData = new FormData();
        formData.append("profile_pic", this.profilePic ? this.profilePic : "");
        await this.dataService.updateData(this.action, formData).subscribe(
          (res: any) => {
            this.loading = false;
            if (res?.status == 200) {
              this.getAllProfileData();
              localStorage.setItem("currentUser", JSON.stringify(res?.data));
              location.reload();
            }
          },
          (error) => {
            this.loading = false;
            this.notify.notificationService.error(error);
          }
        );
      }
      else {
        this.action = {
          action: "profile-pic",
          id: parseInt(this.userId)
        };
  
        let formData = new FormData();
        formData.append("profile_pic", this.profilePic ? this.profilePic : "");
        await this.dataService.updateData(this.action, formData).subscribe(
          (res: any) => {
            if (res?.status == 200) {
              this.getAllProfileData();
              this.notify.notificationService.success(res?.message);
            }
          },
          (error) => {
            this.notify.notificationService.error(error);
          }
        );
      }

    }
  }

  async getCurrentUser() {
    let action: string = "find-user";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe((res: any) => {
      if (this.userId == this.currentUser?.id) {
        localStorage.setItem("currentUser", JSON.stringify(res?.data));
      } else {
        this.otherProfile = res?.data;
        this.dataService.castDataEvent(this.otherProfile);
      }
    })
  }

  async getAllProfileData() {
    let action: string = "all-profileUsers";
    await this.dataService
      .getDataById(action, (this.userId) ? this.userId : this.currentUser?.id)
      .subscribe((res: any) => {
        this.profileData = res;
        console.log(this.profileData)
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      });
  }

  /** Open editiable form view profile */
  edit() {
    this.isFormEditable = true;
  }

  /** update profile */
  save() {
    this.isFormEditable = false;
  }
  backButton(){
   this._location.back();
  }
}
