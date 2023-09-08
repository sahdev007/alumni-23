import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { Config } from 'src/app/services/config';

@Component({
  selector: 'app-create-featured-alumni',
  templateUrl: './create-featured-alumni.component.html',
  styleUrls: ['./create-featured-alumni.component.scss']
})
export class CreateFeaturedAlumniComponent implements OnInit {
  submitted: boolean = false;
  featuredForm: FormGroup;
  getInstitutes: any;
  gender: any;
  getBatch: any;
  profilePic: any;
  image: any;
  loading: boolean;
  pageType: any;
  alumniId: any;
  currentUser: any;
  updatedMartialStatus: any;
  updatedFile: any;
  marStatus: any;

  constructor(public fb: FormBuilder,
    private celebrateService : CelebrateService,
    private arouter: ActivatedRoute,
    private router: Router,
    private notifyService: TokenInterceptor,
    private config: Config
    ) {

    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
   
    this.marStatus = this.config?.maritalStatus;
  }

  ngOnInit() {
    this.buildForm();
    this.getAllInstitutes();
    this.getAllBatches();
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.alumniId = res?.alumniId;
      if(this.pageType == 'update-getFeatured') this.getAlumniById(this.alumniId);
    });
  }
  
  /**
   * Function to build form
   */
  buildForm () {
    this.featuredForm = this.fb.group({
      id: [''],
      email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      full_name: ['', Validators.required],
      institute_id: ['', Validators.required],
      batchYear_id: ['', Validators.required],
      personal_email: [''],
      office_email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      gender: ['',Validators.required],
      employed_entrepreneur: ['', Validators.required],
      current_company: ['', Validators.required],
      current_designation: ['', Validators.required],
      current_location: ['', Validators.required],
      current_industry: [''],
      alternate_profession: ['', Validators.required],
      native_city: ['', Validators.required],
      first_job: ['', Validators.required],
      first_salary: ['', Validators.required],
      favourite_book_author: ['', Validators.required],
      personal_hero: ['', Validators.required],
      first_hear: ['', Validators.required],
      marital_status: ['', Validators.required],
      campus_placement:['', Validators.required],
      placement_location: ['', Validators.required],
      if_married_sbup: ['', Validators.required],
      spouse_details: ['', Validators.required],
      life_lessons: ['', Validators.required],
      share_memories: ['', Validators.required],
      share_current_students: ['', Validators.required],
      share_future_students: [''],
      share_message_alumni: [''],
      willing_to_provide_mentorship: ['', Validators.required],
      share_hidden_talents: ['', Validators.required],
      facebook_id: [''],
      instagram_id: [''],
      twitter_id: [''],
      linkedin_id: [''],
      overall_rating: ['', Validators.required],
      file: ['', Validators.required],
      status: [''],
      description: ['', Validators.required],
      order_by: ['']
    });
  }

  get f() { return this.featuredForm.controls;}

  async getAllInstitutes() {
    let action: string = "all-institute"
    await this.celebrateService.getAllData(action).subscribe(
      (res: any) => {
        this.getInstitutes = res?.Institute;
      }, error => {
        this.notifyService.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async getAllBatches() {
    let action: string = "all-batch"
    await this.celebrateService.getAllData(action).subscribe(
      (res: any) => {
        this.getBatch = res?.BatchYear;
      }, error => {
          console.log(error);
      }
    );
  }
/**
 * Function to get Data By Id
 * @param params 
 */
  async getAlumniById(params:any) {
    this.loading = true;
    let action: string = "single-getFeatured";
    await this.celebrateService.getDataById(action, params).subscribe((res: any) => {
      this.updatedMartialStatus = res?.data?.marital_status;
      this.updatedFile = res?.data?.file;
      this.featuredForm.patchValue({
        ...this.updatedFile,
        ...res?.data
      });
      this.loading = false;
    })
  }
  /**
   * Function to Upload File
   * @param event 
   */
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
  
  async save () {
    this.submitted = true;
    if(this.featuredForm.invalid) {
      return;
    } 
    else {
      let action = {
        action: this.pageType == "update-getFeatured" ? this.pageType : 'create-getFeatured',
        id: this.pageType == 'update-getFeatured' ? this.alumniId : '' 
      }

      let formData = new FormData();
      formData.append('id', this.pageType == 'update-getFeatured' ? this.alumniId : '');
      formData.append('email', this.featuredForm?.value?.email);
      formData.append('full_name', this.featuredForm?.value?.full_name);
      formData.append('institute_id', this.featuredForm?.value?.institute_id);
      formData.append('batchYear_id', this.featuredForm?.value?.batchYear_id);
      formData.append('personal_email', this.featuredForm?.value?.personal_email);
      formData.append('office_email', this.featuredForm?.value?.office_email);
      formData.append('mobile_number', this.featuredForm?.value?.mobile_number);
      formData.append('gender', this.featuredForm?.value?.gender);
      formData.append('employed_entrepreneur', this.featuredForm?.value?.employed_entrepreneur);
      formData.append('current_company', this.featuredForm?.value?.current_company);
      formData.append('current_designation', this.featuredForm?.value?.current_designation);
      formData.append('current_location', this.featuredForm?.value?.current_location);
      formData.append('current_industry', this.featuredForm?.value?.current_industry);
      formData.append('alternate_profession', this.featuredForm?.value?.alternate_profession);
      formData.append('native_city', this.featuredForm?.value?.native_city);
      formData.append('first_job', this.featuredForm?.value?.first_job);
      formData.append('first_salary', this.featuredForm?.value?.first_salary);
      formData.append('favourite_book_author', this.featuredForm?.value?.favourite_book_author);
      formData.append('personal_hero', this.featuredForm?.value?.personal_hero);
      formData.append('first_hear', this.featuredForm?.value?.first_hear);
      formData.append('marital_status', this.featuredForm?.value?.marital_status);
      formData.append('campus_placement', this.featuredForm?.value?.campus_placement);
      formData.append('placement_location', this.featuredForm?.value?.placement_location);
      formData.append('if_married_sbup', this.featuredForm?.value?.if_married_sbup);
      formData.append('spouse_details', this.featuredForm?.value?.spouse_details);
      formData.append('life_lessons', this.featuredForm?.value?.life_lessons);
      formData.append('share_memories', this.featuredForm?.value?.share_memories);
      formData.append('share_current_students', this.featuredForm?.value?.share_current_students);
      formData.append('share_future_students', this.featuredForm?.value?.share_future_students);
      formData.append('share_message_alumni', this.featuredForm?.value?.share_message_alumni);
      formData.append('willing_to_provide_mentorship', this.featuredForm?.value?.willing_to_provide_mentorship);
      formData.append('share_hidden_talents', this.featuredForm?.value?.share_hidden_talents);
      formData.append('file', (this.profilePic) ? this.profilePic : '');
      formData.append('facebook_id', this.featuredForm?.value?.facebook_id);
      formData.append('instagram_id', this.featuredForm?.value?.instagram_id);
      formData.append('twitter_id', this.featuredForm?.value?.twitter_id);
      formData.append('linkedin_id', this.featuredForm?.value?.linkedin_id);
      formData.append('overall_rating', this.featuredForm?.value?.overall_rating);  
      formData.append('status', this.featuredForm?.value?.status);
      formData.append('description', this.featuredForm?.value?.description);  
      
      await this.celebrateService.postData(action, formData).subscribe((res: any) => {
        if(res?.status == 200) {
          this.notifyService.notificationService.success(res?.message);
          this.router.navigate(["/celebrate/featured-alumni"]);
        }
      }, error => {
          this.notifyService.notificationService.error(error);
      });
    }
  }

}
