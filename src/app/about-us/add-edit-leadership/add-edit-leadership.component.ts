import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { AboutService } from 'src/app/services/about.service';
import { Config } from 'src/app/services/config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-leadership',
  templateUrl: './add-edit-leadership.component.html',
  styleUrls: ['./add-edit-leadership.component.scss']
})
export class AddEditLeadershipComponent implements OnInit {
  leadershipForm: FormGroup;
  pageType: any;
  teamId: any;
  profilePic: any;
  image: any;
  submitted: boolean;
  status: any;
  updatedImg: any;
  allInstitute: any;
  imgPath: any;
  singleTeamData:any;
  loading: boolean;

  constructor(public arouter: ActivatedRoute, public router: Router, private aboutService : AboutService,
     public fb: FormBuilder, public notifyService: TokenInterceptor, public config: Config) { 
      this.status = this.config?.status;
      this.imgPath = environment?.imgUrl;
     }

  async ngOnInit() {
    this.buildForm();
    this.getAllInstitute();
    this.arouter.queryParams.subscribe((res: any) => {
      this.pageType = res?.action;
      this.teamId = res?.id;
    });
    /**Get and single team data and Patch with form */
    if(this.teamId) {
      let action: string = "single-team";
      await this.aboutService.getDataById(action, this.teamId).subscribe((x: any) => {
        setTimeout(() => {
          this.singleTeamData = x?.data;
          this.updatedImg = this.singleTeamData?.image;

          this.leadershipForm.get('name').setValue(this.singleTeamData?.name);
          this.leadershipForm.get('designation').setValue(this.singleTeamData?.designation);
          this.leadershipForm.get('order').setValue(this.singleTeamData?.order);
          this.leadershipForm.get('institute_id').setValue(this.singleTeamData?.institute_id);
          this.leadershipForm.get('status').setValue(this.singleTeamData?.status);
        }, 500);
      });
    }
  }

  /**
   * Build Leadership form data
   */
  buildForm() {
    this.leadershipForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      order: ['', Validators.required],
      institute_id: ['', Validators.required],
      status: ['', Validators.required],
      image: ['']
    });
  }

    /**
 * on upload image
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
        }
      }
    }
/**
 * Function to Create/Update team
 * @returns 
 */
    async save() {
      this.submitted = true;
      let action = {
        action: this.pageType == "update-team" ? "update-team" : "create-team",
        id: this.pageType == 'update-team' ? parseInt(this.teamId) : ""
      }

      console.log(this.leadershipForm.value);

      if(this.leadershipForm.invalid){
        return;
      } else {
        let formData = new FormData();
        formData.append('image', (this.profilePic) ? this.profilePic : '');
        formData.append('name', this.leadershipForm?.value?.name);
        formData.append('designation', this.leadershipForm?.value?.designation);
        formData.append('order', this.leadershipForm?.value?.order);
        formData.append('institute_id', this.leadershipForm?.value?.institute_id);
        formData.append('status', this.leadershipForm?.value?.status);
  
        await this.aboutService.postData(action, formData).subscribe((res: any) => {
          if (res?.status === 200) {
            this.notifyService.notificationService.success(res?.message);
            this.router.navigate(['/about-us/leadership-team']);
          }
        }, error => {
          this.notifyService.notificationService.error(error);
        });
      }
    }
  
    /**
     * Function to get all Institutes
     */
    async getAllInstitute(){
      let action:string = "all-institute";
      await this.aboutService.getAllData(action).subscribe((x: any) => {
        this.allInstitute = x?.Institute;
      })
    }
  }

