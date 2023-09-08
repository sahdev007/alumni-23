import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenInterceptor } from 'src/app/core/token.interceptor';
import { CelebrateService } from 'src/app/services/celebrate.service';
import { Config } from 'src/app/services/config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-edit-magazine',
  templateUrl: './add-edit-magazine.component.html',
  styleUrls: ['./add-edit-magazine.component.scss']
})
export class AddEditMagazineComponent implements OnInit {
  magazineForm: FormGroup;
  profilePic: any;
  image: any;
  submitted: boolean;
  magazineId: any;
  pageType: any;
  status:any;
  loading: boolean;
  magazineData:any;
  imgPath:any;
  updatedFile: any;

  constructor(private notifyService: TokenInterceptor, public fb: FormBuilder,
    private celebrateService: CelebrateService, public router: Router, public aroute: ActivatedRoute,
    private config: Config) { 
      this.imgPath = environment?.imgUrl;
      this.status = this.config?.status;

      // Get Id by queryparams
      this.aroute.queryParams.subscribe((params: any) => {
        this.magazineId = params?.id;
        this.pageType = params?.action
      })

      if(this.magazineId) this.getSingleMagazine();
    }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.magazineForm = this.fb.group({
     id: [''],
     magazine_name: ['', Validators.required],
     link: ['', Validators.required],
     file: [''],
     subscribe_user: [''],
     status: ['', Validators.required] 
    });
  }

  /**
 * Function to get single Magazine by id
 */
  async getSingleMagazine() {
    this.loading = true;
    let action  = 'single-magazine';
      await this.celebrateService.getDataById(action, this.magazineId).subscribe((res:any) => {
        this.magazineData = res?.data;
        this.updatedFile = res?.data?.file;
        this.magazineForm.patchValue({...this.magazineData});
        this.loading = false;
      }); 
  }
 
  async save() {
   this.submitted = true;
   if (this.magazineForm.invalid) {
     return;
   } else {
     let action = {
       action: this.pageType,
       id: this.pageType == 'update-magazine' ? parseInt(this.magazineId) : ''
     }
 
     const formData: FormData = new FormData();
     formData.append('file', (this.profilePic) ?  this.profilePic: '');
     formData.append('magazine_name', this.magazineForm?.value?.magazine_name);
     formData.append('link', this.magazineForm?.value?.link);
     formData.append('subscribe_user', this.magazineForm?.value?.subscribe_user);
     formData.append('status', this.magazineForm?.value?.status);
 
     await this.celebrateService.postData(action, formData).subscribe((res: any) => {
       if (res?.status === 200) {
         this.notifyService.notificationService.success(res?.message);
         this.router.navigate(['/media/magazine']);
       }
     }, error => {
       this.notifyService.notificationService.error(error);
     });
 
   }
  }
 
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
 
}
