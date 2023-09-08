import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, AfterViewInit {
  settingForm: FormGroup;
  token: any;
  image: any;
  siteLogo: any;
  submitted: boolean;
  settingData: any;
  updateLogo: any;
  imgPath: any;

  constructor(public fb: FormBuilder, private dataService: DataService, private notify: TokenInterceptor) {
    if (localStorage.hasOwnProperty("token")) {
      this.token =
        JSON?.parse(localStorage?.getItem("token") || "");
    }
    this.imgPath = environment?.imgUrl;
   }

  ngOnInit(): void {
    this.buildForm();
    this.getSetting();
    setTimeout(() => {
      this.settingForm.controls['appName'].setValue(this.settingData?.appName);
      // this.settingForm.controls['siteAddress'].setValue(this.settingData?.siteAddress);
      this.settingForm.controls['email'].setValue(this.settingData?.email);
      this.settingForm.controls['mobileNumber'].setValue(this.settingData?.mobileNumber);
      this.settingForm.controls['facebook'].setValue(this.settingData?.facebook);
      this.settingForm.controls['instagram'].setValue(this.settingData?.instagram);
      this.settingForm.controls['linkedin'].setValue(this.settingData?.linkedin);
      this.settingForm.controls['youtube'].setValue(this.settingData?.youtube);
      this.settingForm.controls['twitter'].setValue(this.settingData?.twitter);
      this.settingForm.controls['footerText'].setValue(this.settingData?.footerText);
      this.updateLogo = this.settingData?.logo;
      
      console.log(this.updateLogo);
    }, 2000);
  }

  buildForm() {
    this.settingForm = this.fb.group({
      id: [''],
      appName: ['', Validators.required],
      // siteAddress: ['', Validators.required],
      email: ['',  [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(16)]],
      facebook: ['', Validators.required],
      instagram: ['', Validators.required],
      linkedin: ['', Validators.required],
      youtube: ['', Validators.required],
      twitter: ['', Validators.required],
      footerText: ['', Validators.required],
      logo: ['', Validators.required],
    });
  }

  get f() {
    return this.settingForm.controls;
  }

  /**
   * Get All Setting Data
   */
  getSetting(){
    let route: string = "update-setting";
    let params = {
      action: route
    }
    this.dataService.postData(params).subscribe((x:any) => {
      if(x?.data) this.settingData = x?.data[0];
    })
  }

  /**
   * Function to Upload File
   * @param event 
   */
  onUploadImage(event: any) {
    this.siteLogo = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.siteLogo = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
    }
  }

  /**
   * Function to save/update setting
   * @returns 
   */
  async save() {
    this.submitted = true;
    console.log(this.settingForm.value);
    if (this.settingForm.invalid) {
      return;
    } else {
      let action: string = "update-setting";
      let params = {
        action: action
      }
      let formData = new FormData();

      formData.append('logo', (this.siteLogo) ? this.siteLogo : '');
      formData.append('appName', this.settingForm?.value?.appName);
      // formData.append('siteAddress', this.settingForm?.value?.siteAddress);
      formData.append('email', this.settingForm?.value?.email);
      formData.append('mobileNumber', this.settingForm?.value?.mobileNumber);
      formData.append('facebook', this.settingForm?.value?.facebook);
      formData.append('instagram', this.settingForm?.value?.instagram);
      formData.append('linkedin', this.settingForm?.value?.linkedin);
      formData.append('youtube', this.settingForm?.value?.youtube);
      formData.append('twitter', this.settingForm?.value?.twitter);
      formData.append('footerText', this.settingForm?.value?.footerText);

      this.dataService.postData(params, formData).subscribe((x:any) => {
        if(x?.status == 200) {
          this.notify.notificationService.success(x?.message);
          this.ngOnInit();
        }
      },
      error => {
        this.notify.notificationService.error(error);
      })
    }
  }

  ngAfterViewInit(){
    console.log(this.settingData);
  }
  
}
