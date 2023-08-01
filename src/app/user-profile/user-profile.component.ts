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
    this.buildForm();
    this.getCommonData();

    setTimeout(() => {
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
    this.loading = false;
  }

  buildForm() {
    this.profileForm = this.fb.group({
      profile_pic: [""]
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
